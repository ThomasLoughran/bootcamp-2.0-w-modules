import { ArticleContent } from "../../../types";
import { ArticleStyled } from "./Article.styled";

export type ArticleProps = {
  isMain?: boolean;
  article: ArticleContent;
};

export const Article = ({ isMain = true, article }: ArticleProps) => {
  return (
    <ArticleStyled $isMain={isMain}>
      <h2>{article.heading}</h2>
      <p>{article.blurb}</p>
    </ArticleStyled>
  );
};
