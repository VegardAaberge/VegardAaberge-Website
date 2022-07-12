export default {
  name: "contact",
  title: "Contact",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      readOnly: ({ document }) => !document?.publishedOnce,
    },
    {
      name: "email",
      title: "Email",
      type: "string",
      readOnly: ({ document }) => !document?.publishedOnce,
    },
    {
      name: "message",
      title: "Message",
      type: "text",
      readOnly: ({ document }) => !document?.publishedOnce,
    },
  ],
};
