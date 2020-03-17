import React from "react";

import i18n from "./i18n/i18n.json";

import "@ui5/webcomponents/dist/Label";
import "@ui5/webcomponents/dist/Link";

const TabIndiaInfo = () => {
  return (
    <div>
      <div>
        <ui5-title level="H3">Important Websites </ui5-title>
        <ul>
          <li>
            <ui5-label>{i18n.T_INDIA_WEBSITE}</ui5-label>
            {"  "}
            <ui5-link href="https://www.mohfw.gov.in/" target="_blank" wrap>
              {i18n.MINISTRY_OF_HEALTH}
            </ui5-link>
          </li>
          <li>
            <ui5-label>{i18n.T_INDIA_WEBSITE} </ui5-label>
            {"  "}
            <ui5-link
              href="https://icmr.nic.in/content/covid-19"
              target="_blank"
              wrap
            >
              {i18n.ICMR_FULL}
            </ui5-link>
          </li>
        </ul>
        <ui5-title level="H3">{i18n.T_TEST_CENTER_HELPLINE}</ui5-title>
        <ui5-label wrap>(Last Updated : 17 March 2020)</ui5-label>

        <ul>
          <li>
            <ui5-label>{i18n.CENTRAL_HELPLINE}</ui5-label>
            {" :  "}
            <ui5-link href="tel:+91-11-23978046">+91-11-23978046</ui5-link>
          </li>
          <li>
            <ui5-label>{i18n.ALL_HELPLINE_NUMBERS}</ui5-label>
            {" :  "}
            <ui5-link
              href="https://www.mohfw.gov.in/coronvavirushelplinenumber.pdf"
              target="_blank"
            >
              {i18n.ALL_STATE_UT}
            </ui5-link>
          </li>
          <li>
            <ui5-label>Email</ui5-label>
            {" :  "}
            <ui5-link href="mailto:ncov2019@gmail.com " target="_blank">
              ncov2019@gmail.com
            </ui5-link>
          </li>
          <br />
          <li>
            <ui5-link
              href="https://icmr.nic.in/sites/default/files/upload_documents/COVID_19_Testing_Laboratories.pdf"
              target="_blank"
            >
              {i18n.LIST_TESTING_SITE}
            </ui5-link>
          </li>
          <li>
            <ui5-link
              href="https://icmr.nic.in/sites/default/files/upload_documents/COVID_19_Testing_Sites.pdf"
              target="_blank"
            >
              {i18n.MAP_TESTING_SITES}
            </ui5-link>
          </li>
          <li>
            <ui5-link
              href="http://icmr.nic.in/sites/default/files/upload_documents/List_of_VRDL_V2.pdf"
              target="_blank"
            >
              {i18n.LAB_ACROSS_INDIA}
            </ui5-link>
          </li>
        </ul>
        {/* {-----------------------------------------------------------------------------------------------------------} */}
        {/* {-----------------------------------------------------------------------------------------------------------} */}
        <ui5-title level="H3"> {i18n.ADDITIONAL_INFO} </ui5-title>
        <ul>
          <li>
            <ui5-label>Youtube (Ministry of Health) </ui5-label>
            {" :  "}
            <ui5-link
              href="https://www.mohfw.gov.in/FINAL_14_03_2020_Hindi.pdf"
              target="_blank"
              wrap
            >
              COVID-19 Management Videos
            </ui5-link>
          </li>
          <li>
            <ui5-label>Ministry of Health (14 March 2020) </ui5-label>
            {" :  "}
            <ui5-link
              href="https://www.mohfw.gov.in/FINAL_14_03_2020_ENg.pdf"
              target="_blank"
              wrap
            >
              When to get tested? (English)
            </ui5-link>
          </li>

          <li>
            <ui5-label>Ministry of Health (14 March 2020) </ui5-label>
            {" :  "}
            <ui5-link
              href="https://www.mohfw.gov.in/FINAL_14_03_2020_Hindi.pdf"
              target="_blank"
              wrap
            >
              {i18n.WHEN_TO_GET_TESTED_HINDI}
            </ui5-link>
          </li>
          <li>
            <ui5-label>ICMR</ui5-label>
            {" :  "}
            <ui5-link
              href="https://icmr.nic.in/sites/default/files/upload_documents/Advisory_COVID19_9Mar2020.pdf"
              target="_blank"
              wrap
            >
              Testing Strategy (9 March 2020)
            </ui5-link>
          </li>
        </ul>
        <br />
      </div>
    </div>
  );
};

export default TabIndiaInfo;
