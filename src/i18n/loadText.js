/**
 * @file: Loads respective i18n file based on user preference.
 */
import i18n_en from './i18n_en.json';
import i18n_bn from './i18n_bn.json';
import i18n_hi from './i18n_hi.json';
import i18n_kn from './i18n_kn.json';
import i18n_mr from './i18n_mr.json';
import i18n_ta from './i18n_ta.json';
import i18n_te from './i18n_te.json';
import i18n_gu from './i18n_gu.json';
import i18n_pa from './i18n_pa.json';
import i18n_ne from './i18n_ne.json';
import i18n_de from './i18n_de.json';
import i18n from './i18n.json';
import _ from 'lodash';

let currentLocale = 'en';

const changeCurrentLocale = locale => {
  currentLocale = locale;
  switch (locale) {
    case 'en':
      return _.defaults(i18n_en, i18n);
    case 'hi':
      return _.defaults(i18n_hi, i18n);
    case 'kn':
      return _.defaults(i18n_kn, i18n);
    case 'bn':
      return _.defaults(i18n_bn, i18n);
    case 'mr':
      return _.defaults(i18n_mr, i18n);
    case 'ta':
      return _.defaults(i18n_ta, i18n);
    case 'te':
      return _.defaults(i18n_te, i18n);
    case 'gu':
      return _.defaults(i18n_gu, i18n);
    case 'pa':
      return _.defaults(i18n_pa, i18n);
    case 'ne':
      return _.defaults(i18n_ne, i18n);
    case 'de':
      return _.defaults(i18n_de, i18n);
    default:
      currentLocale = 'en';
      return i18n;
  }
};

const getValidLocale = () => {
  return [
    {
      displayText: 'English',
      code: 'en',
    },
    {
      displayText: 'हिंदी (Hindi)',
      code: 'hi',
    },
    {
      displayText: 'ಕನ್ನಡ (Kannada)',
      code: 'kn',
    },
    {
      displayText: 'বাংলা (Bengali)',
      code: 'bn',
    },
    {
      displayText: 'मराठी (Marathi)',
      code: 'mr',
    },
    {
      displayText: 'தமிழ் (Tamil)',
      code: 'ta',
    },
    // {
    //   displayText: 'తెలుగు (Telugu)',
    //   code: 'te',
    // },
    // {
    //   displayText: 'ગુજરાતી (Gujarati)',
    //   code: 'gu',
    // },
    // {
    //   displayText: 'પંજાબી (Punjabi)',
    //   code: 'pa',
    // },
    {
      displayText: 'नेपाली (Nepali)',
      code: 'ne',
    },
    {
      displayText: 'German',
      code: 'de',
    },
  ];
};
export { currentLocale, changeCurrentLocale, getValidLocale };
