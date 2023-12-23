import { fields, component } from "@keystatic/core";

export const video = component({
  label: "Video",
  preview: ({ fields }) => <p>{fields.content.value}</p>,
  schema: {
    content: fields.pathReference({
      label: "File",
      pattern: "public/posts/**/*",
    }),
  },
});
