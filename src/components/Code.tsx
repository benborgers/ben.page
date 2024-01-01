import shiki from "shiki";

export default function Code({
  highlighter,
  language,
  children,
}: {
  highlighter: shiki.Highlighter;
  language: string | undefined;
  children: React.ReactNode;
}) {
  const html = highlighter.codeToHtml(children?.toString() ?? "", {
    lang: language,
  });

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
