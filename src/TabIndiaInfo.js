import React from "react";

import "@ui5/webcomponents/dist/Label";
import "@ui5/webcomponents/dist/Link";

const TabIndiaInfo = () => {
  return (
    <div>
      <div>
        <ui5-title level="H3">Important Websites </ui5-title>
        <ul>
          <li>
            <ui5-label>Website: </ui5-label>
            {"  "}
            <ui5-link href="https://www.mohfw.gov.in/" target="_blank" wrap>
              Ministry of Health
            </ui5-link>
          </li>
          <li>
            <ui5-label>Website: </ui5-label>
            {"  "}
            <ui5-link
              href="https://icmr.nic.in/content/covid-19"
              target="_blank"
              wrap
            >
              Indian Council of Medical Research
            </ui5-link>
          </li>
        </ul>
        <ui5-title level="H3">Test Centers & Helpline </ui5-title>
        <ui5-label wrap>(Last Updated on: 17 March 2020)</ui5-label>

        <ul>
          <li>
            <ui5-label>Central Helpline </ui5-label>
            {" :  "}
            <ui5-link href="tel:+91-11-23978046">+91-11-23978046</ui5-link>
          </li>
          <li>
            <ui5-label>Helpline Numbers</ui5-label>
            {" :  "}
            <ui5-link
              href="https://www.mohfw.gov.in/coronvavirushelplinenumber.pdf"
              target="_blank"
            >
              All States & Union Territories (UT)
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
              List of COVID-19 Testing Sites
            </ui5-link>
          </li>
          <li>
            <ui5-link
              href="https://icmr.nic.in/sites/default/files/upload_documents/COVID_19_Testing_Sites.pdf"
              target="_blank"
            >
              COVID-19 Testing Sites (Map)
            </ui5-link>
          </li>
          <li>
            <ui5-link
              href="http://icmr.nic.in/sites/default/files/upload_documents/List_of_VRDL_V2.pdf"
              target="_blank"
            >
              Laboratories across India & Contact Info
            </ui5-link>
          </li>
        </ul>
        {/* {-----------------------------------------------------------------------------------------------------------} */}
        {/* {-----------------------------------------------------------------------------------------------------------} */}
        <ui5-title level="H3"> Additional Info </ui5-title>
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
              When to get tested? (Hindi)
            </ui5-link>
          </li>
          <li>
            <ui5-label>Infographic </ui5-label>
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
