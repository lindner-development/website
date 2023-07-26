import { Dialog, Switch } from "@kobalte/core";
import { createSignal, batch } from "solid-js";
import { useStore } from '@nanostores/solid';
import { cookiesSetAtom, cookiePopupOpenAtom, performanceCookiesEnabledAtom, functionalCookiesEnabledAtom, marketingCookiesEnabledAtom } from '../../localStorage';
import "./style.scss";
import "./switch.scss";
import { Button } from "../Button/Button";
import { useTranslations } from "../../i18n";

export interface CookieDialogProps {
    language: string;
}

export const CookieDialog = (props: CookieDialogProps) => {
    const t = useTranslations(props.language as "en" | "de");
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

    return <Dialog.Root modal={true} open={$dialogOpen()}>
        <Dialog.Portal>
            <Dialog.Overlay class="dialog__overlay" />
            <div class="dialog__positioner">
                <Dialog.Content class="dialog__content">
                    <div class="dialog__header">
                        <Dialog.Title class="dialog__title">Cookies</Dialog.Title>
                    </div>
                    <Dialog.Description class="dialog__description">
                        {t("cookieBanner.explaination") as string}
                        <br />
                        <div class="cookie-type-selection">
                            <Switch.Root class="switch" checked={true} readOnly={true}>
                                <Switch.Input class="switch__input" />
                                <Switch.Control class="switch__control">
                                    <Switch.Thumb class="switch__thumb" />
                                </Switch.Control>
                                <Switch.Label class="switch__label">Erforderlich</Switch.Label>
                            </Switch.Root>
                            <Switch.Root class="switch" checked={performanceCookiesEnabled()} onChange={setPerformanceCookiesEnabled}>
                                <Switch.Input class="switch__input" />
                                <Switch.Control class="switch__control">
                                    <Switch.Thumb class="switch__thumb" />
                                </Switch.Control>
                                <Switch.Label class="switch__label">Performance</Switch.Label>
                            </Switch.Root>
                            <Switch.Root class="switch" checked={functionalCookiesEnabled()} onChange={setFunctionalCookiesEnabled}>
                                <Switch.Input class="switch__input" />
                                <Switch.Control class="switch__control">
                                    <Switch.Thumb class="switch__thumb" />
                                </Switch.Control>
                                <Switch.Label class="switch__label">Funktional</Switch.Label>
                            </Switch.Root>
                            <Switch.Root class="switch" checked={marketingCookiesEnabled()} onChange={setMarketingCookiesEnabled}>
                                <Switch.Input class="switch__input" />
                                <Switch.Control class="switch__control">
                                    <Switch.Thumb class="switch__thumb" />
                                </Switch.Control>
                                <Switch.Label class="switch__label">Marketing</Switch.Label>
                            </Switch.Root>
                        </div>
                        <div class="cookie-button-group">
                            <Button variant="primary" onClick={() => {
                                batch(() => {
                                    setPerformanceCookiesEnabled(true);
                                    setFunctionalCookiesEnabled(true);
                                    setMarketingCookiesEnabled(true);
                                });

                                setTimeout(useCookies, 300);
                            }}>{t("cookieBanner.acceptAll") as string}</Button>
                            <Button variant="primary" outline onClick={useCookies}>{t("cookieBanner.acceptRequired") as string}</Button>
                        </div>
                        <br />
                        <div class="cookie-links">
                            <a href={`/${props.language}/privacy-policy`} title={t("footer.privacyPolicy") as string}>{t("footer.privacyPolicy") as string}</a>
                            <a href={`/${props.language}/legal-details`} title={t("footer.legalDetails") as string}>{t("footer.legalDetails") as string}</a>
                        </div>
                    </Dialog.Description>
                </Dialog.Content>
            </div>
        </Dialog.Portal>
    </Dialog.Root>
};