import "./style.scss";
import { Mail, Phone } from "lucide-solid";
import { BsWhatsapp } from 'solid-icons/bs'
import { Show, createSignal, onCleanup, onMount } from "solid-js";

export const FloatingActionButtons = () => {
    const [date, setDate] = createSignal(new Date());
    let intervalId: NodeJS.Timeout | undefined;

    onMount(() => intervalId = setInterval(() => setDate(new Date()), 10_000));
    onCleanup(() => clearInterval(intervalId));

    return <div class="lindner-fab-container">
        <a class="lindner-fab-button lindner-fab-button--whatsapp" title="WhatsApp" href="https://wa.me/+4979315636154"
        >
            <BsWhatsapp size={24} color="#ffffff" stroke="#ffffff" />
        </a>
        <Show when={date().getHours() >= 16 && date().getHours() <= 21} fallback={
            <a class="lindner-fab-button" title="E-Mail" href="mailto:lindnerit.io"><Mail /></a>
        }>
            <a class="lindner-fab-button" title="Phone" href="tel:+4979315636150"><Phone /></a>
        </Show>
    </div>
}