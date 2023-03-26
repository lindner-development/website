import "./style.scss";
import { Button as KobalteButton } from "@kobalte/core";
import { JSX, splitProps } from "solid-js";

export interface ButtonProps extends JSX.HTMLAttributes<HTMLButtonElement> {
    variant: "primary" | "secondary";
    outline?: boolean;

    title: string;
    children?: JSX.Element | JSX.Element[] | string;
}

export const Button = (props: ButtonProps) => {
    const [localProps, otherProps] = splitProps(props, ["class", "variant", "outline", "title", "children"]);
    return <KobalteButton.Root {...otherProps} title={localProps.title} class={`lindner-button lindner-button__${localProps.variant}${localProps.class ? ` ${localProps.class}` : ""}${localProps.outline ? " lindner-button__outline" : ""}`}>
        {localProps.children ?? localProps.title}
    </KobalteButton.Root>;
}