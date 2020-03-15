import React from "react";
import "./App.css";

import TabEligibilityChecker from "./TabEligibilityChecker";
import TabMoreInfo from "./TabMoreInfo";
import TabTestCenters from "./TabTestCenters";

import "@ui5/webcomponents/dist/Icon.js";
import "@ui5/webcomponents/dist/TabContainer";
import "@ui5/webcomponents/dist/Tab";
import "@ui5/webcomponents/dist/Label";
function App() {
  return (
    <div className="App">
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
