export default {
  name: "works",
  title: "Works",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },

    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "projectLink",
      title: "Project Link",
      type: "string",
    },
    {
      name: "codeLink",
      title: "Code Link",
      type: "string",
    },
    {
      name: "company",
      title: "Company",
      type: "string",
    },
    {
      name: "period",
      title: "Period",
      type: "string",
    },
    {
      name: "imgUrl",
      title: "ImageUrl",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "skillsUsed",
      title: "Skills",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "skills" }],
        },
      ],
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [
        {
          name: "tag",
          title: "Tag",
          type: "string",
          options: {
            list: ["Website", "Mobile App", "Software"],
          },
        },
      ],
    },
    {
      name: "priority",
      title: "Priority",
      type: "number",
    },
  ],
};
