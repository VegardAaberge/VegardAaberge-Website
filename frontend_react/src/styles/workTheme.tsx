import {
  createTheme,
  experimental_sx as sx,
  responsiveFontSizes,
} from "@mui/material/styles";

let workTheme = createTheme({
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
    MuiListItemText: {
      styleOverrides: {
        primary: sx({
          fontSize: "1.1rem",
        }),
      },
    },
  },
});
workTheme = responsiveFontSizes(workTheme);

export default workTheme;
