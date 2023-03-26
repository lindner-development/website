import type { JSX } from "solid-js";
import "./style.scss";

export interface IndustryCardProps {
    icon: JSX.Element;
    name: JSX.Element | string;
    description: JSX.Element | string;
}

export const IndustryCard = (props: IndustryCardProps) => {
    return <li class="industry-card">
        <div class="industry-card__icon">
            {props.icon}
        </div>
        <div class="industry-card__title">{props.name}</div>
        <div class="industry-card__description">{props.description}</div>
    </li>
}