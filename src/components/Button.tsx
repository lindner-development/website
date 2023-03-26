import { JSX, splitProps } from "solid-js"
import "../scss/button.scss";

export interface ButtonProps extends Omit<JSX.ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
    variant?: "primary" | "secondary";
    title: string;
    subtitle: string;
}

export const Button = (props: ButtonProps) => {
    const [localProps, otherProps] = splitProps(props, ["variant", "title", "subtitle"]);
    return <button {...otherProps} class={`lindner-button lindner-button--${localProps.variant}`}>
        <div class="lindner-button__title">{localProps.title}</div>
        <div class="lindner-button__subtitle">{localProps.subtitle}</div>
    </button>
}