export default {
  name: "workExperience",
  title: "Work Experience",
  type: "document",
  fields: [
    { name: "name", title: "name", type: "string" },
    {
      name: "company",
      title: "Company",
      type: "string",
    },
    {
      name: "desc",
      title: "Desc",
      type: "text",
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
  ],
};
