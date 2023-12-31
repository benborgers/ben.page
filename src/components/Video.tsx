export default function Video({ content }: { content: string }) {
  return <video src={content.replace("public", "")} controls />;
}
