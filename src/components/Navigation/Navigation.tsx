import type { JSX } from "solid-js";
import "./style.scss";

export interface NavigationProps {
    children: JSX.Element | JSX.Element[] | string;
}

export const Navigation = (props: NavigationProps) => <nav class="lindner-navigation">
    <ul>{props.children}</ul>
</nav>