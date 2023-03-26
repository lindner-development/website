import { JSX, splitProps } from "solid-js";

export interface ContentSectionProps extends JSX.HTMLAttributes<HTMLElement> {
    heading: string | JSX.Element;
    subheading: string | JSX.Element;
}

export const ContentSection = (props: ContentSectionProps) => {
    const [localProps, otherProps] = splitProps(props, ["heading", "subheading", "class", "children"]);
    return <section class={`content-section${localProps.class ? ` ${localProps.class}` : ""}`} {...otherProps}>
        <hgroup>
            <h2 class="content-section__title">{localProps.heading}</h2>
            <div>{localProps.subheading}</div>
        </hgroup>
        <div class="content-section__content">
            {localProps.children}
        </div>
    </section>
}