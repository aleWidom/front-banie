import { ComponentProps } from "react";

export interface InputProps {
    type?: ComponentProps<"input">["type"];
    errorsMessage?: string;
    placeholder?: string;
}
