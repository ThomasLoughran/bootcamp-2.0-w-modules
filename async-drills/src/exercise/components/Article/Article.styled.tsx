import styled from "styled-components";

export const ArticleStyled = styled.div<{ $isMain: boolean }>`
  background-color: ${({ $isMain }) => ($isMain ? "lightyellow" : "lightblue")};
  margin: 20px;
  padding: 20px;
`;
