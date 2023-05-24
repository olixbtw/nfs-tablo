// https://spacejelly.dev/posts/how-to-create-css-custom-properties-that-dynamically-update-with-react-javascript/

//TODO: change to useColors with setter
export const useGetColors = (): useGetColorsReturnType => {
  //   const setColor = (key: colorVariables, value: string) =>
  //     document.documentElement.style.setProperty(`--${key}`, value);
  const getColor = (color: colorVariables) =>
    getComputedStyle(document.documentElement).getPropertyValue(`--${color}`);

  const white = getColor("white");
  const black = getColor("black");
  const grey1 = getColor("grey1");
  const grey2 = getColor("grey2");
  const grey3 = getColor("grey3");
  const grey4 = getColor("grey4");
  const grey5 = getColor("grey5");
  const grey6 = getColor("grey6");
  const accent1 = getColor("accent1");
  const accent2 = getColor("accent2");
  const accent3 = getColor("accent3");
  const yellow = getColor("yellow");
  const green = getColor("green");
  const fuchsia = getColor("fuchsia");
  const red = getColor("red");
  const brown = getColor("brown");
  const blue = getColor("blue");
  const purple = getColor("purple");

  return {
    white,
    black,
    grey1,
    grey2,
    grey3,
    grey4,
    grey5,
    grey6,
    yellow,
    green,
    fuchsia,
    red,
    brown,
    blue,
    purple,
    accent1,
    accent2,
    accent3,
  };
};
const colorVariablesArray = [
  "white",
  "black",
  "grey1",
  "grey2",
  "grey3",
  "grey4",
  "grey5",
  "grey6",
  "accent1",
  "accent2",
  "accent3",
  "yellow",
  "green",
  "fuchsia",
  "red",
  "brown",
  "blue",
  "purple",
] as const;
type colorVariables = typeof colorVariablesArray[number];
type useGetColorsReturnType = {
  [key in colorVariables]: string;
};
