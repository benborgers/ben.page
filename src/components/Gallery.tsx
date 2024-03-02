// This component gets rendered to static HTML, but we still want a bit of interactivity,
// so I'm using vanilla JS. It's a terrible idea, but the parent Document should be statically
// rendered and therefore this cannot be client-side rendered. Sorry.

import { useId } from "react";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";

export default function Gallery({
  photos,
}: {
  photos: { photo: string; caption?: string }[];
}) {
  const id = useId();
  return (
    <>
      <div data-gallery={id}>
        {photos.map(({ photo, caption }, index) => (
          <div hidden={index !== 0}>
            <img src={photo} className="my-0 cursor-e-resize" />

            <div className="mt-2 space-y-1">
              {caption && <p className="my-0 text-center italic">{caption}</p>}

              <div className="mx-auto grid grid-cols-[1fr,max-content,1fr] items-center gap-x-6 text-gray-400 text-sm">
                <button
                  data-prev
                  className="w-max justify-self-end flex items-center gap-x-1.5 italic"
                >
                  <ArrowLeft weight="bold" /> <div>Prev</div>
                </button>
                <div>
                  ({index + 1} of {photos.length})
                </div>
                <button
                  data-next
                  className="ml-1 w-max flex items-center gap-x-1.5 italic"
                >
                  <div>Next</div>
                  <ArrowRight weight="bold" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <script
        dangerouslySetInnerHTML={{
          __html: `
            const parent = document.querySelector('[data-gallery="${id}"]');
            const slides = parent.querySelectorAll('& > div');
            const imgs = parent.querySelectorAll('img');

            const next = () => {
              const current = Array.from(slides).findIndex((img) => !img.hidden);
              slides[current].hidden = true;
              if (current + 1 < slides.length) {
                slides[current + 1].hidden = false;
              } else {
                slides[0].hidden = false;
              }
            }

            const prev = () => {
              const current = Array.from(slides).findIndex((img) => !img.hidden);
              slides[current].hidden = true;
              if (current - 1 >= 0) {
                slides[current - 1].hidden = false;
              } else {
                slides[slides.length - 1].hidden = false;
              }
            }

            imgs.forEach(img => img.addEventListener('click', next));
            parent.querySelectorAll('[data-next]').forEach(btn => btn.addEventListener('click', next));
            parent.querySelectorAll('[data-prev]').forEach(btn => btn.addEventListener('click', prev));
          `,
        }}
      />
    </>
  );
}
