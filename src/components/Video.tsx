export default ({ content }: { content: string }) => {
  return <video src={content.replace("public", "")} controls />;
};
