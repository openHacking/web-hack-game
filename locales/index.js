import { en } from "./en";
import { zh } from "./zh";
import { language } from "../utils/util";

export const locales = {
    zh,
    en
}

export const currentLocale = language() === 'zh' ? 'zh' : 'en'
export const locale = locales[currentLocale]