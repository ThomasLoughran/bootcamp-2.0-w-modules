import { ArticleContent } from "../types";
import { isError, sleep } from "../utils";
import { ArticleId } from "./types";

export const getMainArticle = async (
  articleId: ArticleId
): Promise<ArticleContent> => {
  await sleep(articleId);

  if (isError()) {
    throw Error(
      "This is an error that has been randomly created for the purposes of learn. Code can succeed or fail but the true winner in this is learning!"
    );
  }

  return articles[articleId];
};

const articles: { [key in ArticleId]: ArticleContent } = {
  1: {
    heading:
      "Time Travel Achieved: Scientists Accidentally Send a Cat to the Future",
    blurb:
      "In a groundbreaking experiment, physicists at CERN accidentally transport a feline companion 100 years into the future. The implications for time travel and the nature of reality are profound, but the fate of the time-displaced cat remains unknown.",
  },
  2: {
    heading: "Scientists Discover Unicorns Living in Remote Amazonian Tribe",
    blurb:
      "Shocking new research reveals a previously uncontacted Amazonian tribe that lives in harmony with real-life unicorns. The mythical creatures are said to be the key to the tribe's advanced medicinal knowledge and utopian society.",
  },
  3: {
    heading: "Aliens Land in Roswell, Again!",
    blurb:
      "A mysterious object crashes in the New Mexico desert, sparking renewed interest in extraterrestrial life. Experts debate the origins of the debris, while conspiracy theorists claim it's proof of a government cover-up.",
  },
};
