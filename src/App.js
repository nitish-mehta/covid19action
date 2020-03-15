import React from "react";
import "./App.css";

import TabEligibilityChecker from "./TabEligibilityChecker";
import TabMoreInfo from "./TabMoreInfo";
import TabTestCenters from "./TabTestCenters";

import "@ui5/webcomponents/dist/Icon.js";
import "@ui5/webcomponents-fiori/dist/ShellBar";
import "@ui5/webcomponents-fiori/dist/features/CoPilotAnimation.js";
import "@ui5/webcomponents/dist/TabContainer";
import "@ui5/webcomponents/dist/Tab";
import "@ui5/webcomponents/dist/Label";

import "@ui5/webcomponents-icons/dist/json-imports/Icons.js";
// import "@ui5/webcomponents-icons/dist/icons/activities.js";

function App() {
  return (
    <div className="App">
      <ui5-shellbar
        primary-title="Corporate Portal"
        show-co-pilot
        notification-count="22"
      ></ui5-shellbar>
      <ui5-tabcontainer class="full-width" show-overflow>
        <ui5-tab icon="activities" text="Not well?" selected>
          <TabEligibilityChecker />
        </ui5-tab>
        <ui5-tab icon="calendar" text="Test Centers">
          <TabTestCenters />
        </ui5-tab>
        <ui5-tab icon="calendar" text="Tell me more">
          <TabMoreInfo />
        </ui5-tab>
      </ui5-tabcontainer>
    </div>
  );
}

export default App;
