import type { JSX } from "solid-js";
import "./style.scss";
import { Dialog } from "@kobalte/core";
import { NavigationHamburger } from "./NavigationHamburger";
import { AiOutlineClose } from "solid-icons/ai";

export interface NavigationRootProps {
    children?: JSX.Element[] | JSX.Element;
}

export const NavigationRoot = (props: NavigationRootProps) =>
    <>
        <div class="lindner-navigation__root lindner-navigation__root__desktop">
            {props.children}
        </div>
        <div class="lindner-navigation__root lindner-navigation__root__mobile">
            <Dialog.Root>
                <Dialog.Trigger class="lindner-navigation__trigger">
                    <NavigationHamburger />
                </Dialog.Trigger>
                <Dialog.Portal>
                    <Dialog.Overlay />
                    <div class="lindner-navigation__dialog-positioner">
                        <Dialog.Content class="lindner-navigation__dialog-content">
                            <Dialog.CloseButton class="lindner-navigation__close"><AiOutlineClose size={24} /></Dialog.CloseButton>
                            <Dialog.Title>Navigation</Dialog.Title>
                            <Dialog.Description>
                                <div class="lindner-navigation__list">
                                    {props.children}
                                </div>
                            </Dialog.Description>
                        </Dialog.Content>
                    </div>
                </Dialog.Portal>
            </Dialog.Root>
        </div>
    </>