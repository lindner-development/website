import { clarity } from "clarity-js";
import { performanceCookiesEnabledAtom } from './localStorage';

let clarityEnabled = performanceCookiesEnabledAtom.get();

if (clarityEnabled) {
    clarity.consent();
    clarity.start({
        projectId: "g6lwwaht01",
        upload: "https://m.clarity.ms/collect",
        track: true,
        content: true
    });
    console.info("Since performance cookies are enabled, Microsoft Clarity has been enabled.")
}
else {
    console.info("Since performance cookies are disabled, Microsoft Clarity has not been enabled.")
}

performanceCookiesEnabledAtom.listen((value: boolean) => {
    if (value === clarityEnabled) return;
    if (value) {
        clarity.consent();
        clarity.start({
            projectId: "g6lwwaht01",
            upload: "https://m.clarity.ms/collect",
            track: true,
            content: true
        });
        console.info("Microsoft Clarity has been enabled.")
    }
    else {
        clarity.stop();
        console.info("Microsoft Clarity has been disabled.")
    }
    clarityEnabled = value;
});