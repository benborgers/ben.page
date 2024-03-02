import { fields, component } from "@keystatic/core";

export const gallery = component({
  label: "Gallery",
  preview: ({ fields }) => {
    const count = fields.photos.elements.length;
    return (
      <p>
        {count} photo{count !== 1 ? "s" : ""}
      </p>
    );
  },
  schema: {
    photos: fields.array(
      fields.object({
        photo: fields.image({
          label: "Photo",
        }),
        caption: fields.text({ label: "Text" }),
      }),
      {
        label: "Photos",
        itemLabel: (props) => props.fields.photo.value?.filename ?? "",
      }
    ),
  },
});
