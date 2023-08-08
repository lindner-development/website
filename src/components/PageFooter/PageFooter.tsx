import "./style.scss";
import { Separator } from "@kobalte/core";
import { Github, Instagram, Linkedin, Youtube } from "lucide-solid";
import { useTranslations } from "../../i18n";

export interface FooterProps {
    currentLanguage: string;
    germanLink: string;
    englishLink: string;
}

export const PageFooter = (props: FooterProps) => {
    const t = useTranslations(props.currentLanguage as "en" | "de");
    return <footer>
        {/*<div class="lindner-newsletter-notice">
            Bleiben Sie nicht im Dunkeln!<br />
Abonnieren Sie kostenlos unseren Newsletter und wir bringen Licht ins digitale Chaos.</div>*/}
        <nav class="lindner-footer-contents">
            <div><img
                slot="branding"
                width="119"
                height="39"
                src="/wordmark.svg"
                alt="Lindner IT Branding"
            /></div>
            <ul class="lindner-footer-navigation">
                <li><a href={`/${props.currentLanguage}/legal-details`}>{t("footer.legalDetails") as string}</a></li>
                <li><a href={`/${props.currentLanguage}/privacy-policy`}>{t("footer.privacyPolicy") as string}</a></li>
                <li><a href={`/${props.currentLanguage}/terms-of-service`}>{t("footer.termsOfService") as string}</a></li>
            </ul>
            <div class="lindner-footer-contact">
                <div>{t("footer.phone") as string}: <a href="tel:+4979315636150">+49 (0) 7931 5636 - 150</a></div>
                <div>{t("footer.email") as string}: <a href="mailto:info@lindnerit.io">info@lindnerit.io</a></div>
            </div>
        </nav>
        <Separator.Root class="lindner-footer-separator" />
        <div class="lindner-footer-misc">
            <div class="lindner-footer-language">
                <a href={props.germanLink} class={props.currentLanguage === "de" ? "active" : ""} hreflang="de-DE" title="Deutsch">DE</a>
                &nbsp;|&nbsp;
                <a href={props.englishLink} class={props.currentLanguage === "en" ? "active" : ""} hreflang="en-US" title="English">EN</a>
            </div>
            <div class="lindner-copyright-notice">
                <div>&copy; 2023 Lindner IT UG (haftungsbeschränkt)</div>
                <br />
                <div class="lindner-b2b-disclaimer">
                    {t("footer.b2bNotice") as string}
                </div>
            </div>
            <ul class="lindner-footer-social">
                <li><a href="https://www.instagram.com/lindner.it/" target="_blank" rel="noopener noreferrer" title="Instagram"><Instagram /></a></li>
                <li><a href="https://www.linkedin.com/company/lindner-it/" target="_blank" rel="noopener noreferrer" title="LinkedIn"><Linkedin /></a></li>
                <li><a href="https://www.youtube.com/@lindnerit" target="_blank" rel="noopener noreferrer" title="YouTube"><Youtube /></a></li>
                <li><a href="https://github.com/lindner-development" target="_blank" rel="noopener noreferrer" title="Github"><Github /></a></li>
            </ul>
        </div>
    </footer>
}