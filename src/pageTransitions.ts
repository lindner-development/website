import Swup from "swup";
import SwupFadeTheme from '@swup/fade-theme';
import SwupA11yPlugin from '@swup/a11y-plugin';
import SwupGaPlugin from '@swup/ga-plugin';
import SwupGtmPlugin from '@swup/gtm-plugin';
import SwupHeadPlugin from '@swup/head-plugin';
//import SwupDebugPlugin from '@swup/debug-plugin';

export const swup = new Swup({
    plugins: [
        new SwupFadeTheme(),
        new SwupA11yPlugin(),
        new SwupHeadPlugin(),
        new SwupGaPlugin(),
        new SwupGtmPlugin()
        //new SwupDebugPlugin()
    ],
});
