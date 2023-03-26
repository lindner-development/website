import "./style.scss";

export interface NavigationItemProps {
    title: string;
    href: string;
}

export const NavigationItem = (props: NavigationItemProps) =>
    <a class="lindner-navigation__item" title={props.title} href={props.href} rel="prefetch">
        {props.title}
    </a>