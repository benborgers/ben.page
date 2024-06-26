---
title: How to render a PDF with React
unlisted: true
date: 2022-06-02
---

There’s a fantastic React library aptly named [`react-pdf`](https://github.com/wojtekmaj/react-pdf) for rendering PDFs on a website.

However, when using it, I kept running into issues. For example, my PDF would constantly just say:

> Failed to load PDF file.

Eventually I figured it out, and I wanted to share how I got `react-pdf` working.

First, install `react-pdf`:

```bash
npm install react-pdf
```

Here’s an example of the component using `react-pdf` that I ended up writing:

```jsx
import { useState, useEffect, useRef } from "react";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

export default function PDF({ src }) {
  const container = useRef(null);

  const [width, setWidth] = useState(0);
  useEffect(() => {
    setWidth(container.current.clientWidth);
  }, []);

  const [numPages, setNumPages] = useState(0);

  return (
    <>
      <div ref={container}>
        <Document
          file={src}
          onLoadSuccess={({ numPages }) => setNumPages(numPages)}
          onLoadError={console.error}
        >
          {Array.from(new Array(numPages)).map((_, i) => (
            <Page pageNumber={i + 1} width={width} key={i} />
          ))}
        </Document>
      </div>
    </>
  );
}
```

- One of the trickiest things to get working is the `workerSrc`, which is a URL to a JavaScript “worker” that renders the PDF. This is a part of [`pdf.js`](https://mozilla.github.io/pdf.js), the powerful underlying library used by `react-pdf`. `react-pdf` was looking for a file at `/pdf.worker.js`, which didn’t exist. Eventually I solved the problem by pointing the package towards a version of `pdf.worker.js` on [**unpkg**](https://unpkg.com), a website that hosts npm packages.
- I measure the wrapping `container` when the page loads and set the PDF’s page width to the correct width.
- When the PDF loads, I take the number of pages that it has and show all the pages. You can also just show one page at a time by rendering a single `<Page />` component and changing the `pageNumber`, but I wanted to show the full PDF on the website.
  - `Array.from(new Array(numPages))` is just a fancy way of creating an array of length `numPages` where each slot in the array is empty.
- Defining `onLoadError` can be very helpful for debugging, since by default these messages aren’t printed to the console.
