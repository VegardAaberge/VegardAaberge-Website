export default {
  name: "testimonials",
  title: "Testimonials",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "company",
      title: "Company",
      type: "string",
    },
    {
      name: "position",
      title: "Position",
      type: "string",
    },
    {
      name: "imgurl",
      title: "ImgUrl",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "feedback",
      title: "Feedback",
      type: "text",
    },
    {
      name: "documentPath",
      title: "DocumentPath",
      type: "string",
    },
    {
      name: "priority",
      title: "Priority",
      type: "number",
    },
  ],
};
