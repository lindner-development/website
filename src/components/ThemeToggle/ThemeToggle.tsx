import { Button } from "@kobalte/core";
import { MoonStar, Sun } from "lucide-solid"
import { createEffect, createSignal } from "solid-js";
import { Motion, Presence } from "solid-motionone";
import "./style.scss";

const initializeTheme = () => {
    let theme;
    if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {
        theme = localStorage.getItem("theme") as "light" | "dark";
    } else if (typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        theme = "dark";
    } else {
        theme = "light";
    }
    return theme;
};

export const ThemeToggle = () => {
    const [theme, setTheme] = createSignal<string>(initializeTheme());

    createEffect(() => {
        if (typeof document === "undefined") return;
        if (typeof localStorage === "undefined") return;

        const root = document.documentElement;
        if (theme() === "light") {
            root.dataset.theme = "light";
            localStorage.setItem("theme", "light");
        } else {
            root.dataset.theme = "dark";
            localStorage.setItem("theme", "dark");
        }
    });

    return <Button.Root class="lindner-theme-toggle" title="Toggle theme" data-state={theme()} onClick={() => setTheme((t) => (t === "light" ? "dark" : "light"))}>
        <div class="lindner-icon-container">
            <Presence>
                {theme() === "light" &&
                    <Motion.div
                        class="lindner-icon"
                        animate={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}>
                        <div><Sun /></div>
                    </Motion.div>}
                {theme() === "dark" &&
                    <Motion.div
                        class="lindner-icon"
                        animate={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}>
                        <div><MoonStar /></div>
                    </Motion.div>}
            </Presence>
        </div>
    </Button.Root>
}