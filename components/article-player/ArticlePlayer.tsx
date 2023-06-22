"use client";

import { Box, Button, Text } from "@chakra-ui/react";
import { RefObject, useCallback, useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";
import { FaPause, FaPlay } from "react-icons/fa";

interface IProps {
  url: string;
}

const useWavesurfer = (
  containerRef: RefObject<HTMLDivElement>,
  url: string
) => {
  const [wavesurfer, setWavesurfer] = useState<WaveSurfer | null>(null);

  // Initialize wavesurfer when the container mounts
  // or any of the props change
  useEffect(() => {
    if (!containerRef.current) return;

    const ws = WaveSurfer.create({
      // @ts-ignore
      url,
      container: containerRef.current,
      waveColor: "#38a169",
      progressColor: "#004922",
      normalize: true,
      // Set a bar width
      barWidth: 3,
      // Optionally, specify the spacing between bars
      barGap: 2,
      // And the bar radius
      barRadius: 2,
      height: 70,
    });

    setWavesurfer(ws);

    return () => {
      ws.destroy();
    };
  }, [containerRef, url]);

  return wavesurfer;
};

const ArticlePlayer: React.FC<IProps> = ({ url }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const wavesurfer = useWavesurfer(containerRef, url);

  useEffect(() => {
    if (!wavesurfer) return;

    setCurrentTime(0);
    setIsPlaying(false);

    wavesurfer.load(url);

    wavesurfer.on("play", () => setIsPlaying(true));
    wavesurfer.on("pause", () => setIsPlaying(false));

    return () => {
      wavesurfer.un("play", () => setIsPlaying(true));
      wavesurfer.un("pause", () => setIsPlaying(false));
    };
  }, [wavesurfer]);

  // On play button click
  const onPlayClick = useCallback(() => {
    wavesurfer?.isPlaying() ? wavesurfer.pause() : wavesurfer?.play();
  }, [wavesurfer]);

  return (
    <Box
      sx={{
        backgroundColor: "gray.100",
        padding: 4,
        borderRadius: 8,
        my: 4,
      }}
    >
      <Text mb={3} fontWeight="bold">
        Nechce se vám číst? Poslechněte si článek
      </Text>
      <Box
        display="flex"
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 4,
          width: "100%",
          "& > div": {
            width: "100%",
          },
        }}
      >
        <Button onClick={onPlayClick} sx={{ width: 30 }}>
          {isPlaying ? <FaPause /> : <FaPlay />}
        </Button>
        <div ref={containerRef} />
      </Box>
    </Box>
  );
};

export default ArticlePlayer;
