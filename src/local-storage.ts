import { persistentAtom } from '@nanostores/persistent';

export const cookiePopupOpenAtom = persistentAtom('popup-open', true, {
    encode: JSON.stringify,
    decode: JSON.parse,
});
export const cookiesSetAtom = persistentAtom('cookies-set', false, {
    encode: JSON.stringify,
    decode: JSON.parse,
});
export const performanceCookiesEnabledAtom = persistentAtom('cookies-performance', false, {
    encode: JSON.stringify,
    decode: JSON.parse,
});
export const functionalCookiesEnabledAtom = persistentAtom('cookies-functional', false, {
    encode: JSON.stringify,
    decode: JSON.parse,
});
export const marketingCookiesEnabledAtom = persistentAtom('cookies-marketing', false, {
    encode: JSON.stringify,
    decode: JSON.parse,
});