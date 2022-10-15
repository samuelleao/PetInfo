import { styled } from "@stitches/react";

export const InputWrapper = styled('div', {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    gap: "0.75rem",
    "& input": {
        width: "100%",
        height: "2.75rem",
        borderRadius: "$1",
        border: "0.063rem solid $gray600",
        paddingLeft: "1rem",
        "&:focus-visible":{
            outlineColor: "$gray100 "
        },
    }
})