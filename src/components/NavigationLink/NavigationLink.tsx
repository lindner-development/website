import { Link } from "@kobalte/core";
import "./style.scss";

export interface NavigationLinkProps {
    href: string;
    title: string;
    current: boolean;
}

export const NavigationLink = (props: NavigationLinkProps) => <li class="lindner-navigation-link">
    <Link.Root class="lindner-navigation-link__root" aria-current={props.current} href={props.href} title={props.title} rel="prefetch" data-astro-prefetch="viewport">{props.title}</Link.Root>
</li>