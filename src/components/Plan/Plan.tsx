import "./plan.scss";
import type { JSX } from "solid-js";

export interface PlanProps {
    title: string;
    subtitle: string;
    children?: JSX.Element | JSX.Element[] | string;
    recommended?: boolean;
}

export const Plan = (props: PlanProps) => {
    return <div classList={{
        "plan": true,
        "plan__recommended": props.recommended
    }}>
        <div class="plan__header">
            <h3 class="plan__title">{props.title}</h3>
            <h4 class="plan__subtitle">{props.subtitle}</h4>
        </div>
        <div class="plan__features">
            {props.children}
        </div>
    </div>
}

