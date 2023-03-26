import { Breadcrumbs as KobalteBreadcrumbs } from "@kobalte/core";
import { CgChevronRight } from "solid-icons/cg";
import { For, Show } from "solid-js";
import "./style.scss";

export interface BreadcrumbsProps {
    links: BreadcrumbLink[]
}

export interface BreadcrumbLink {
    title: string;
    href?: string | undefined;
    isCurrent?: boolean | undefined;
}

export const Breadcrumbs = (props: BreadcrumbsProps) => <KobalteBreadcrumbs.Root separator={<CgChevronRight />}>
    <ol class="breadcrumbs__list">
        <For each={props.links}>
            {(link, index) => <li class="breadcrumbs__item">
                <KobalteBreadcrumbs.Link href={link.href} isCurrent={link.isCurrent} class="breadcrumbs__link">
                    {link.title}
                </KobalteBreadcrumbs.Link>
                <Show when={index() < (props.links.length - 1)}>
                    <KobalteBreadcrumbs.Separator class="breadcrumbs__separator" />
                </Show>
            </li>}
        </For>
    </ol>
</KobalteBreadcrumbs.Root>