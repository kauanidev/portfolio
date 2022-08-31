const baseColors = { primary: "#FF6968", secondary: "#65B8AE" };

export const darkTheme = {
  ...baseColors,
  bg: "#111111",
  bgImage: "/dark.png",
  shape: {
    400: "#444444",
    600: "#333333",
  },
  text: "#AAAAAA",
  title: "#F1F2F3",
};

export const lightTheme = {
  ...baseColors,
  bg: "#f0f0f0",
  bgImage: "/light.png",
  shape: {
    400: "#d9d9d9",
    600: "#c9c9c9",
  },
  text: "#444444",
  title: "#333333",
};
