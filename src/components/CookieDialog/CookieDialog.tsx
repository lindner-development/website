import { Dialog, Switch, Button } from "@kobalte/core";
import { createSignal } from "solid-js";
import { useStore } from '@nanostores/solid';
import { cookiesSetAtom, cookiePopupOpenAtom, performanceCookiesEnabledAtom, functionalCookiesEnabledAtom, marketingCookiesEnabledAtom } from '../../local-storage';
import "./style.scss";
import "./switch.scss";
import "./button.scss";

// TODO: Beim ESC Drücken eine Wackel-Animation wie bei Apple einbauen

export const CookieDialog = () => {
    const $dialogOpen = useStore(cookiePopupOpenAtom);

    const [performanceCookiesEnabled, setPerformanceCookiesEnabled] = createSignal(cookiesSetAtom.get() ? performanceCookiesEnabledAtom.get() : false);
    const [functionalCookiesEnabled, setFunctionalCookiesEnabled] = createSignal(cookiesSetAtom.get() ? functionalCookiesEnabledAtom.get() : false);
    const [marketingCookiesEnabled, setMarketingCookiesEnabled] = createSignal(cookiesSetAtom.get() ? marketingCookiesEnabledAtom.get() : false);

    const useCookies = () => {
        performanceCookiesEnabledAtom.set(performanceCookiesEnabled());
        functionalCookiesEnabledAtom.set(functionalCookiesEnabled());
        marketingCookiesEnabledAtom.set(marketingCookiesEnabled());

        cookiesSetAtom.set(true);
        cookiePopupOpenAtom.set(false);
    };

    return <Dialog.Root isModal={true} isOpen={$dialogOpen()}>
        <Dialog.Portal>
            <Dialog.Overlay class="dialog__overlay" />
            <div class="dialog__positioner">
                <Dialog.Content class="dialog__content">
                    <div class="dialog__header">
                        <Dialog.Title class="dialog__title">Dürfen wir kurz stören?</Dialog.Title>
                    </div>
                    <Dialog.Description class="dialog__description">
                        Willkommen auf dem Internetportal der Lindner IT.
                        <br />
                        <br />
                        Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten.
                        Sie können selber entscheiden, welche Cookies Sie zulassen möchten.
                        Weitere Informationen finden Sie in unserer <a href="/privacy-policy" title="Datenschutzerklärung">Datenschutzerklärung</a>.
                        <br />
                        <div class="cookie-type-selection">
                            <Switch.Root class="switch" isChecked={true} isReadOnly={true}>
                                <Switch.Input class="switch__input" />
                                <Switch.Control class="switch__control">
                                    <Switch.Thumb class="switch__thumb" />
                                </Switch.Control>
                                <Switch.Label class="switch__label">Erforderlich</Switch.Label>
                            </Switch.Root>
                            <Switch.Root class="switch" isChecked={performanceCookiesEnabled()} onCheckedChange={setPerformanceCookiesEnabled}>
                                <Switch.Input class="switch__input" />
                                <Switch.Control class="switch__control">
                                    <Switch.Thumb class="switch__thumb" />
                                </Switch.Control>
                                <Switch.Label class="switch__label">Performance</Switch.Label>
                            </Switch.Root>
                            <Switch.Root class="switch" isChecked={functionalCookiesEnabled()} onCheckedChange={setFunctionalCookiesEnabled}>
                                <Switch.Input class="switch__input" />
                                <Switch.Control class="switch__control">
                                    <Switch.Thumb class="switch__thumb" />
                                </Switch.Control>
                                <Switch.Label class="switch__label">Funktional</Switch.Label>
                            </Switch.Root>
                            <Switch.Root class="switch" isChecked={marketingCookiesEnabled()} onCheckedChange={setMarketingCookiesEnabled}>
                                <Switch.Input class="switch__input" />
                                <Switch.Control class="switch__control">
                                    <Switch.Thumb class="switch__thumb" />
                                </Switch.Control>
                                <Switch.Label class="switch__label">Marketing</Switch.Label>
                            </Switch.Root>
                        </div>
                        <div class="cookie-button-group">
                            <Button.Root class="cookie-button" onClick={() => {
                                setPerformanceCookiesEnabled(true);
                                setFunctionalCookiesEnabled(true);
                                setMarketingCookiesEnabled(true);

                                setTimeout(useCookies, 300);
                            }}>Alle Cookies zulassen</Button.Root>
                            <Button.Root class="cookie-button cookie-button--small" onClick={useCookies}>Ausgewählte übernehmen</Button.Root>
                        </div>
                        <br />
                        <div class="cookie-links">
                            <a href="/privacy-policy" title="Datenschutzerklärung">Datenschutzerklärung</a>
                            <a href="/legal-details" title="Impressum">Impressum</a>
                        </div>
                    </Dialog.Description>
                </Dialog.Content>
            </div>
        </Dialog.Portal>
    </Dialog.Root>
};