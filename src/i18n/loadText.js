/**
 * @file: Loads respective i18n file based on user preference.
 */
import i18n_en from "./i18n_en.json";
import i18n_bn from "./i18n_bn.json";
import i18n_hi from "./i18n_hi.json";
import i18n from "./i18n.json";

const changeCurrentLocale = locale => {
  switch (locale) {
    case "en":
      return i18n_en;
    case "bn":
      return i18n_bn;
    case "hi":
      return i18n_hi;
    default:
      return i18n;
  }
};

export default changeCurrentLocale;
