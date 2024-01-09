import { fields, component } from "@keystatic/core";

export const tweet = component({
  label: "Tweet",
  preview: ({ fields }) => <p>{fields.id.value ?? "(none)"}</p>,
  schema: {
    id: fields.text({ label: "Tweet ID" }),
  },
});
