import type { JSX } from "solid-js";
import "./style.scss";

export interface PageHeaderProps {
    branding?: JSX.Element | JSX.Element[] | string;
    children?: JSX.Element | JSX.Element[] | string;
    buttons?: JSX.Element | JSX.Element[] | string;
    language?: string;
}
export const PageHeader = (props: PageHeaderProps) => <header>
    <a href={props.language ? `/${props.language}/` : "/"} title="Home" class="lindner-branding">{props.branding}</a>
    {props.children}
    <div class="lindner-buttons">{props.buttons}</div>
</header>