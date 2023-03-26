import { createSignal } from "solid-js";
import "./style.scss";
import { IndustryCard } from "../IndustryCard/IndustryCard";
import { BiRegularPackage } from 'solid-icons/bi'
import { FaSolidIndustry, FaSolidTruckMoving } from 'solid-icons/fa'

export default function IndustryFocus() {
    return <div class="industry-focus-cards">
        <IndustryCard icon={<FaSolidTruckMoving size={72} />} name="Supply-Chain" description="Optimieren Sie Ihre Lieferkettenprozesse mit unseren maßgeschneiderten Lösungen." />
        <IndustryCard icon={<BiRegularPackage size={72} />} name="Logistik" description="Automatisieren und verbessern Sie Ihre logistischen Abläufe für maximale Effizienz." />
        <IndustryCard icon={<FaSolidIndustry size={72} />} name="Vertrieb/ERP" description="Integrieren und verwalten Sie Ihre Unternehmensprozesse für optimale Leistung." />
    </div>;
}