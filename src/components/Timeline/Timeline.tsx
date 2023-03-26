import { JSX, splitProps } from "solid-js";
import "./style.scss";

export const Timeline = (props: JSX.HTMLAttributes<HTMLDivElement>) => {
    const [localProps, otherProps] = splitProps(props, ["class", "children"]);
    return <div {...otherProps} class={`lindner-timeline${localProps.class ? ` ${localProps.class}` : ""}`}>
        <div class="lindner-timeline-container">
            {localProps.children}
        </div>
    </div>
}

export interface TimelineItemProps {
    date?: string;
    inFuture?: boolean;
    children?: JSX.Element | JSX.Element[] | string;
}

export const TimelineItem = (props: TimelineItemProps) => <div classList={{
    "lindner-timeline-item": true,
    "future": props.inFuture
}}>
    <div class="lindner-timeline-date">{props.date}</div>
    <div class="lindner-timeline-content">{props.children}</div>
</div>