export default function Tweet({ id }: { id: string }) {
  return (
    <div>
      <blockquote className="twitter-tweet">
        <a href={`https://twitter.com/benborgers/status/${id}`}></a>
      </blockquote>
      <script src="https://platform.twitter.com/widgets.js" async></script>
    </div>
  );
}
