// Import the functions you need from the SDKs you need

import { FirebaseOptions, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getPerformance } from "firebase/performance";
//import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";

import { performanceCookiesEnabledAtom } from './local-storage';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig: FirebaseOptions = {
    apiKey: "AIzaSyBZDTWB1uqmcaDVSW5a8umVNCo_0JXELzA",
    authDomain: "lindner-it.firebaseapp.com",
    projectId: "lindner-it",
    storageBucket: "lindner-it.appspot.com",
    messagingSenderId: "475713527975",
    appId: "1:475713527975:web:0a6abcc794eca39d127b82",
    measurementId: "G-T8GDWTZ831"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

if (performanceCookiesEnabledAtom.get()) {
    app.automaticDataCollectionEnabled = true;
    console.info("Da Performance-Cookies aktiviert sind, wurde die Google Analytics-Integration für Firebase aktiviert.");
} else {
    app.automaticDataCollectionEnabled = false;
    console.info("Da Performance-Cookies deaktiviert sind, wurde die Google Analytics-Integration für Firebase deaktiviert.");
}

const analytics = getAnalytics(app);
const performance = getPerformance(app);


if (performanceCookiesEnabledAtom.get()) {
    performance.dataCollectionEnabled = true;
    performance.instrumentationEnabled = true;
    console.info("Da Performance-Cookies aktiviert sind, wurde die Performance-Analyse & Crashlytics für Firebase aktiviert.")
} else {
    performance.dataCollectionEnabled = false;
    performance.instrumentationEnabled = false;
    console.info("Da Performance-Cookies deaktiviert sind, wurde die Performance-Analyse & Crashlytics für Firebase deaktiviert.")
}

/*
const appCheck = initializeAppCheck(app, {
    provider: new ReCaptchaV3Provider("6Ldow9QkAAAAAAsdifpm2o4qRL96tzvTaKeg658l"),
    isTokenAutoRefreshEnabled: true
});*/