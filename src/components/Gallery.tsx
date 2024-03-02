// This component gets rendered to static HTML, but we still want a bit of interactivity,
// so I'm using vanilla JS. It's a terrible idea, but the parent Document should be statically
// rendered and therefore this cannot be client-side rendered. Sorry.

export default function Gallery({
  photos,
}: {
  photos: { photo: string; caption?: string }[];
}) {
  return (
    <div>
      {photos.map(({ photo, caption }, index) => (
        <div>
          <img src={photo} />
          {caption && <p>{caption}</p>}
        </div>
      ))}
    </div>
  );
}
