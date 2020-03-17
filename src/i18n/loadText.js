/**
 * @file: Loads respective i18n file based on user preference.
 */
import i18n_en from "./i18n_en.json";
import i18n_bn from "./i18n_bn.json";
import i18n_hi from "./i18n_hi.json";
import i18n from "./i18n.json";
import _ from "lodash";

let currentLocale = "en";

const changeCurrentLocale = locale => {
  currentLocale = locale;
  switch (locale) {
    case "en":
      return _.defaults(i18n_en, i18n);
    case "bn":
      return _.defaults(i18n_bn, i18n);
    case "hi":
      return _.defaults(i18n_hi, i18n);
    default:
      currentLocale = "en";
      return i18n;
  }
};

export { currentLocale, changeCurrentLocale };
