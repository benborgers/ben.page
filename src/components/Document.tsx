import { DocumentRenderer } from "@keystatic/core/renderer";
import type { DocumentRendererProps } from "@keystatic/core/renderer";
import type { Highlighter } from "shiki";
import type { Tweet as TweetType } from "react-tweet/api";
import Code from "./Code";
import Video from "./Video";
import Tweet from "./Tweet";
import Gallery from "./Gallery";

export default function Document({
  document,
  highlighter,
  tweets,
}: {
  document: DocumentRendererProps["document"];
  highlighter: Highlighter;
  tweets: Record<string, TweetType>;
}) {
  return (
    <DocumentRenderer
      document={document}
      renderers={{
        block: {
          code: ({ language, children }) => (
            <Code
              language={language}
              children={children}
              highlighter={highlighter}
            />
          ),
        },
      }}
      componentBlocks={{
        video: Video,
        tweet: ({ id }) => <Tweet tweet={tweets[id]} />,
        gallery: Gallery,
      }}
    />
  );
}
