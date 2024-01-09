import { fields, component } from "@keystatic/core";

export const tweet = component({
  label: "Tweet",
  preview: ({ fields }) => <p>todo</p>,
  schema: {
    id: fields.text({ label: "Tweet ID" }),
  },
});
