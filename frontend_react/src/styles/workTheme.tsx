import { createTheme, experimental_sx as sx } from "@mui/material/styles";

const workTheme = createTheme({
  components: {
    MuiImageListItemBar: {
      styleOverrides: {
        root: sx({
          fontStyle: "italic",
          alignSelf: "center",
          fontWeight: 600,
        }),
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
  },
});

export default workTheme;
