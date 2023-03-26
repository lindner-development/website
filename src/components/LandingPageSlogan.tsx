
import { createSignal, JSX, onCleanup, onMount } from "solid-js";

export const LandingPageSlogan = (props: JSX.HTMLAttributes<HTMLDivElement>) => {
    const slogans = [
        "Cloud-native Software für die Geschäftsherausforderung von morgen - schon heute!",
        "Machen Sie Ihre Unternehmenssoftwareträume zur Realität mit Lindner IT",
        "Lindner IT: Vorreiter für ein schlaueres Unternehmen",
        "Ihr Erfolg ist unsere Mission - mit Lindner IT in die Cloud!",
        "Lindner IT - Ihre erste Wahl für innovative Enterprise-Software"
    ]

    const [sloganIndex, setSloganIndex] = createSignal(0);
    const [slogan, setSlogan] = createSignal("");
    const [wait, setWait] = createSignal(0);

    let intervalId = setInterval(() => {
        if (wait() > 30) {
            setSlogan("");
            setWait(0);
            return;
        }
        if (wait() > 0) {
            setWait(wait() + 1);
            return;
        }

        if (slogan().length === slogans[sloganIndex()].length) {
            setSloganIndex(sloganIndex() === slogans.length - 1 ? 0 : sloganIndex() + 1);
            setWait(1);
        } else {
            setSlogan(slogan() + slogans[sloganIndex()].charAt(slogan().length));
        }
    }, 70);

    onCleanup(() => clearInterval(intervalId));

    return <div {...props}>{slogan}</div>
};