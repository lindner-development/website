import { clarity } from "clarity-js";
import { functionalCookiesEnabledAtom } from './local-storage';

if (functionalCookiesEnabledAtom.get()) {
    clarity.consent();
    clarity.start({
        projectId: "g6lwwaht01",
        upload: "https://m.clarity.ms/collect",
        track: true,
        content: true
    });
    console.info("Da funktionale Cookies aktiviert sind, wurde Microsoft Clarity aktiviert.")
}
else {

    console.info("Da funktionale Cookies deaktiviert sind, wurde Microsoft Clarity nicht aktiviert.")
}