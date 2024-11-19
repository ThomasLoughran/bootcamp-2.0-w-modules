import { sleep } from "../utils";
import { ArticleId } from "./types";

export const getArticleId = async (): Promise<ArticleId> => {
  await sleep(2);

  return 3;
};
