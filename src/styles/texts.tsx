import { styled } from "src/styles/stitches.config";

export const Text = styled("p", {
  lineHeight: "$1",
  variants: {
    weight: {
      bold: {
        fontWeight: "$1",
      },
      semibold: {
        fontWeight: "$2",
      },
      regular: {
        fontWeight: "$3",
      },
    },
    size: {
      1: {
        fontSize: "$1",
      },
      2: {
        fontSize: "$2",
      },
      3: {
        fontSize: "$3",
      },
      4: {
        fontSize: "$4",
      },
      5: {
        fontSize: "$5",
      },
    },
  },
});
