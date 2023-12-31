import TurndownService from "turndown";

export const htmlToMdoc = (html) => {
  const turndownService = new TurndownService({
    headingStyle: "atx",
    hr: "---",
    codeBlockStyle: "fenced",
  });
  const markdown = turndownService.turndown(html);
  return markdown;
};
