// primary secondary tertiary
const white = "#fff";
const black = "#000";

export const dark = {
  text: white,
  bg: black,
} as const;

export const light = {
  text: black,
  bg: white,
} as const;
