import { JSX, splitProps } from "solid-js";
import "./style.scss";

export const TechStack = (props: JSX.HTMLAttributes<HTMLDivElement>) => {
    const [localProps, otherProps] = splitProps(props, ["class", "children"]);
    return <div {...otherProps} class={`lindner-tech-stack${localProps.class ? ` ${localProps.class}` : ""}`}>
        {localProps.children}
    </div>
}

export const TechStackLayer = (props: JSX.HTMLAttributes<HTMLDivElement>) => {
    const [localProps, otherProps] = splitProps(props, ["class", "children"]);
    return <div {...otherProps} class={`lindner-tech-stack-layer${localProps.class ? ` ${localProps.class}` : ""}`}>
        {localProps.children}
    </div>
}
export const TechStackItem = (props: JSX.HTMLAttributes<HTMLDivElement>) => {
    const [localProps, otherProps] = splitProps(props, ["class", "children"]);
    return <div {...otherProps} class={`lindner-tech-stack-item${localProps.class ? ` ${localProps.class}` : ""}`}>
        {localProps.children}
    </div>
}