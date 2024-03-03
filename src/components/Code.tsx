import type { Highlighter } from "shiki";

export default function Code({
  highlighter,
  language,
  children,
}: {
  highlighter: Highlighter;
  language: string | undefined;
  children: React.ReactNode;
}) {
  const html = highlighter.codeToHtml(children?.toString() ?? "", {
    lang: language ?? "plaintext",
    theme: "dracula",
  });

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
