"use client";

interface IProps {
  url: string;
}

const ArticlePlayer: React.FC<IProps> = ({ url }) => {
  return <audio controls src={url} />;
};

export default ArticlePlayer;
