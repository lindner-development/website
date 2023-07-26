import { splitProps, type JSX } from "solid-js";
import "./style.scss";

export interface ButtonProps extends JSX.HTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'tertiary' | 'light';
    outline?: boolean;
}

export const Button = (props: ButtonProps) => {
    const [localProps, otherProps] = splitProps(props, ['class', 'children', 'variant', 'outline']);
    return (
        <button class={`lindner-button lindner-button-${localProps.variant}${localProps.outline ? "-outline" : ""} ${localProps.class}`} {...otherProps}>
            {localProps.children}
        </button>
    );
};