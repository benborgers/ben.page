import { fields, component } from "@keystatic/core";

export const video = component({
  label: "Video",
  preview: ({ fields }) => <p>{fields.content.value ?? "(no video)"}</p>,
  schema: {
    content: fields.pathReference({
      label: "File",
      pattern: "public/posts/**/*",
    }),
  },
});
