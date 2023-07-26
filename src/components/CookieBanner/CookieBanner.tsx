
import { Cookie } from "lucide-solid";
import { Button } from "../Button/Button";
import { useStore } from '@nanostores/solid';
import "./style.scss";
import { cookiePopupOpenAtom, cookiesSetAtom, functionalCookiesEnabledAtom, marketingCookiesEnabledAtom, performanceCookiesEnabledAtom } from "../../localStorage";
import { batch, createSignal } from "solid-js";
import { useTranslations } from "../../i18n";

export interface CookieBannerProps {
    language: string;
}

export const CookieBanner = (props: CookieBannerProps) => {
    const t = useTranslations(props.language as "en" | "de");
    const $cookiesSet = useStore(cookiesSetAtom);

    const [, setPerformanceCookiesEnabled] = createSignal(cookiesSetAtom.get() ? performanceCookiesEnabledAtom.get() : false);
    const [, setFunctionalCookiesEnabled] = createSignal(cookiesSetAtom.get() ? functionalCookiesEnabledAtom.get() : false);
    const [, setMarketingCookiesEnabled] = createSignal(cookiesSetAtom.get() ? marketingCookiesEnabledAtom.get() : false);

    const allowAllCookies = () => batch(() => {
        setPerformanceCookiesEnabled(true);
        setFunctionalCookiesEnabled(true);
        setMarketingCookiesEnabled(true);
        cookiesSetAtom.set(true);
    });

    const disallowAllCookies = () => batch(() => {
        setPerformanceCookiesEnabled(false);
        setFunctionalCookiesEnabled(false);
        setMarketingCookiesEnabled(false);
        cookiesSetAtom.set(true);
    });

    return <div
        classList={{
            "lindner-cookie-banner": true,
            "lindner-cookie-banner--open": !$cookiesSet()
        }}
    >
        <div class="lindner-cookie-banner__content">
            <div class="lindner-cookie-banner__content_decoration">
                <Cookie size={32} />
            </div>
            <div class="lindner-cookie-banner__content_text">
                <p>{t("cookieBanner.explaination") as string}</p>
                <a href={`/${props.language}/privacy-policy`} title={t("footer.privacyPolicy") as string}>{t("footer.privacyPolicy") as string}</a>
                &nbsp;|&nbsp;
                <a href={`/${props.language}/legal-details`} title={t("footer.legalDetails") as string}>{t("footer.legalDetails") as string}</a>
            </div>
        </div>
        <div class="lindner-cookie-banner__buttons">
            <Button variant="primary" onClick={allowAllCookies}>{t("cookieBanner.acceptAll") as string}</Button>
            <Button variant="primary" onClick={disallowAllCookies} outline>{t("cookieBanner.acceptRequired") as string}</Button>
            <Button variant="primary" onClick={() => cookiePopupOpenAtom.set(true)} outline>{t("cookieBanner.moreOptions") as string}</Button>
        </div>
    </div>
};