import { JSX, Show } from "solid-js";
import "./style.scss";
import { IoMail } from "solid-icons/io";
import { BiRegularNetworkChart } from "solid-icons/bi";
import { FaSolidCode, FaSolidPeopleGroup } from "solid-icons/fa";
import { BsFileRichtextFill } from 'solid-icons/bs'
import { useTranslations } from "../../i18n/utils";

export interface LandingGridProps {
    language: string;
}

export const LandingGrid = (props: LandingGridProps) => {
    const t = useTranslations(props.language as "en" | "de");
    return <div class="lindner-landing-grid">
        <Tile class="grid-tile" title={t('nav.grid-computing')} href={`/${props.language}/grid-computing`}>
            <div class="lindner-tile-content">
                <BiRegularNetworkChart size={96} />
                <div>
                    <h2>{t('nav.grid-computing')}</h2>
                </div>
            </div>
        </Tile>
        <Tile class="development-tile" title={t('nav.software-development')} href={`/${props.language}/software-development`}>
            <div class="lindner-tile-content">
                <FaSolidCode size={96} />
                <div>
                    <h2>{t('nav.software-development')}</h2>
                </div>
            </div>
        </Tile>
        <Tile class="aboutus-tile" title={t('nav.about-us')} href={`/${props.language}/about-us`}>
            <div class="lindner-tile-content">
                <FaSolidPeopleGroup size={96} />
                <div>
                    <h2>{t('nav.about-us')}</h2>
                </div>
            </div>
        </Tile>
        <Tile class="contact-tile" title={t('nav.contact')} href="mailto:info@lindnerit.io">
            <div class="lindner-tile-content">
                <IoMail size={96} />
                <div>
                    <h2>{t('nav.contact')}</h2>
                </div>
            </div>
        </Tile>
        <Tile class="blog-tile" title={t('nav.blog')} href={`/${props.language}/blog`}>
            <div class="lindner-tile-content">
                <BsFileRichtextFill size={96} />
                <div>
                    <h2>{t('nav.blog')}</h2>
                </div>
            </div>
        </Tile>
    </div>
}

interface TileProps {
    class?: string;
    title?: string;
    href?: string;
    children: JSX.Element | JSX.Element[] | string;
}

const Tile = (props: TileProps) => <Show when={props.href} fallback={
    <div class={`lindner-tile${props.class ? ` ${props.class}` : ""}`}>
        {props.children}
    </div>
}>
    <a class={`lindner-tile${props.class ? ` ${props.class}` : ""}`} href={props.href} title={props.title} rel="prefetch">
        {props.children}
    </a>
</Show>;