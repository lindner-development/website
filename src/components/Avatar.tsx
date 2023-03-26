import type { JSX } from "solid-js"

export const Avatar = (props: Omit<JSX.ObjectHTMLAttributes<HTMLObjectElement>, "data">) => <object data="lindner-robin.svg" {...props} />;