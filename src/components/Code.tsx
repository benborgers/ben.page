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

  return (
    // prose-base sets reasonable defaults for padding given we're scaling up the font in Prose.astro.
    <div dangerouslySetInnerHTML={{ __html: html }} className="prose-base" />
  );
}
