import React from "react";

import i18n from "./i18n/i18n.json";
import "@ui5/webcomponents/dist/Label";
import "@ui5/webcomponents/dist/Link";

const TabMoreInfo = () => {
  return (
    <div>
      <div>
        <ui5-title level="H3">{i18n.USEFUL_TRACKING_WEBSITES}</ui5-title>
        <ul>
          <li>
            <ui5-label>[India]</ui5-label>{" "}
            <ui5-link href="https://covidout.in/" target="_blank" wrap>
              https://covidout.in/
            </ui5-link>
          </li>
          <li>
            <ui5-label>[Global]</ui5-label>{" "}
            <ui5-link
              href="https://www.worldometers.info/coronavirus/"
              target="_blank"
              wrap
            >
              https://ncov2019.live/
            </ui5-link>
          </li>
          <li>
            <ui5-link
              href="https://www.worldometers.info/coronavirus/"
              target="_blank"
              wrap
            >
              https://www.worldometers.info/coronavirus/
            </ui5-link>
          </li>
        </ul>
        <ui5-title level="H3">{i18n.LEARN_AND_SHARE}</ui5-title>
        <ul>
          <li>
            <ui5-link
              href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public"
              target="_blank"
              wrap
            >
              WHO: Advice for Public
            </ui5-link>
          </li>
          <br />
          <li>
            <ui5-link href="https://corona-azure.now.sh/" target="_blank" wrap>
              Why social distancing matters?
            </ui5-link>
          </li>
          <li>
            <ui5-link
              href="https://www.washingtonpost.com/graphics/2020/world/corona-simulator/"
              target="_blank"
              wrap
            >
              Social Distancing Simulator - Flatten the curve
            </ui5-link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TabMoreInfo;
