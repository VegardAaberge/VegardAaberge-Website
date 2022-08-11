import { createTheme, experimental_sx as sx } from "@mui/material/styles";

const workTheme = createTheme({
  components: {
    MuiImageListItemBar: {
      styleOverrides: {
        root: sx({
          alignSelf: "center",
        }),
        title: {
          fontStyle: "italic",
          fontWeight: 600,
          fontSize: "0.9rem",
        },
      },
    },
    MuiImageList: {
      styleOverrides: {
        root: sx({
          paddingTop: "0.5rem",
          paddingBottom: "0.5rem",
        }),
      },
    },
    MuiGrid: {
      styleOverrides: {
        root: sx({
          flexBasis: "100%",
        }),
      },
    },
  },
});

export default workTheme;
