import React from "react";
import "./App.css";

import TabEligibilityChecker from "./TabEligibilityChecker";
import TabMoreInfo from "./TabMoreInfo";

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
        <ui5-tab text="Not well?" icon="stethoscope" selected>
          <TabEligibilityChecker />
        </ui5-tab>
        <ui5-tab text="More Info" icon="message-information">
          <TabMoreInfo />
        </ui5-tab>
      </ui5-tabcontainer>
    </div>
  );
}

export default App;
