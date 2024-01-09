import { EmbeddedTweet } from "react-tweet";
import type { Tweet } from "react-tweet/api";

export default function Tweet({ tweet }: { tweet: Tweet }) {
  return (
    <div className="not-prose">
      <EmbeddedTweet tweet={tweet} />
    </div>
  );
}
