const theme = {
  backdropColor: "rgba(0,0,0,0.5)",
  modalBackground: "#14162d",
  borderRadius: "5px",
  modalMaxWidth: "75vw",
  modalTop: "20vh",
    inputBackground: "#121834",
    inputColor: "white",
  breakpoint: {
    xs: "400px",
    s: "600px",
    m: "900px",
    l: "1200px"
  },
  colors: {
    bgDark: "#14162d",
    bgLight: "#1f2137"
  },
  margin: {
    row: "30px"
  }
};

const invertTheme = {
  breakpoint: {
    xs: "400px",
    s: "600px",
    m: "900px",
    l: "1200px"
  },
  colors: {}
};

const mono = {
  ...theme,
    modalPadding: "5px",
  borderRadius: "0px",
  modalBackground: "black",
  headerBackground: "white",
  buttonBackground: "black",
  headerColor: "black",
  inputBackground: "white",
  inputColor: "black",
  inputPadding: "10px",
  fontFamily: "monospace"
};

export { theme, invertTheme, mono };
