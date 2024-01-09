import { DocumentRenderer } from "@keystatic/core/renderer";
import type { DocumentRendererProps } from "@keystatic/core/renderer";
import type { Highlighter } from "shiki";
import Code from "./Code";
import Video from "./Video";
import Tweet from "./Tweet";

export default function Document({
  document,
  highlighter,
}: {
  document: DocumentRendererProps["document"];
  highlighter: Highlighter;
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
      componentBlocks={{ video: Video, tweet: Tweet }}
    />
  );
}
