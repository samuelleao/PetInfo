import { styled } from "./stitches.config";

export const Button = styled('button', {
    appearance: "none",
    height: "2.375rem",
    paddingInline: "1rem",
    background: "$brand100",
    borderRadius: "$1",
    border: "0.063rem solid $brand100",
    cursor: "pointer",
    color: "$gray900",
    fontWeight: "$2",
    "&:focus-visible":{
        outlineColor: "$gray100"
    },
    "&:hover": {
        background: "$brand200",
    },
    variants: {
        outline: {
            true: {
                background: "transparent",
                color: "$gray100",
                borderColor: "$gray600",
                "&:hover": {
                    background: "$gray800",
                }
            }
        }
    }
})