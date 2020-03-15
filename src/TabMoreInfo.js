import React from "react";

import "@ui5/webcomponents/dist/Label";
import "@ui5/webcomponents/dist/Link";

const TabMoreInfo = () => {
  return (
    <div>
      <div>
        <ui5-title level="H3">Test Centers (Across India)</ui5-title>
        <ul>
          <li>
            <ui5-link
              href="https://icmr.nic.in/sites/default/files/upload_documents/Testing_sites_for_COVID19.pdf"
              target="_blank"
            >
              List of testing sites
            </ui5-link>
          </li>
          <li>
            <ui5-link
              href="https://icmr.nic.in/sites/default/files/upload_documents/Sample_Collection_Lab_COVID19.pdf"
              target="_blank"
            >
              Sample Collection Labs
            </ui5-link>
          </li>
        </ul>
        <br />
        <ui5-title level="H3">Additional Info</ui5-title>
        <ul>
          <li>
            <ui5-link
              href="https://icmr.nic.in/content/covid-19"
              target="_blank"
              wrap
            >
              Details on COVID-19 by Indian Council of Medical Research
            </ui5-link>
          </li>
          <li>
            <ui5-link
              href="https://icmr.nic.in/sites/default/files/upload_documents/Advisory_COVID19_9Mar2020.pdf"
              target="_blank"
              wrap
            >
              Infographic - Testing Strategy (9 March 2020)
            </ui5-link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TabMoreInfo;
