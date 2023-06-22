import { Box, Skeleton } from "@chakra-ui/react";
import dynamic from "next/dynamic";

const ArticlePlayerDynamic = dynamic(() => import("./ArticlePlayer"), {
  ssr: false,
  loading: () => (
    <Box
      sx={{
        height: 138,
        backgroundColor: "gray.100",
        padding: 4,
        borderRadius: 8,
        my: 4,
        display: "flex",
        alignItems: "center",
      }}
      py={4}
    >
      <Skeleton height="40px" w="100%" />
    </Box>
  ),
});

export default ArticlePlayerDynamic;
