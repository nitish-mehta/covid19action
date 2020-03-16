import React from "react";
import "./App.css";

import TabEligibilityChecker from "./TabEligibilityChecker";
import TabMoreInfo from "./TabMoreInfo";

import { ThemeProvider } from "@ui5/webcomponents-react/lib/ThemeProvider";

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
    <ThemeProvider>
      <div className="App">
        <div className="Covid19App">
          <ui5-shellbar
            primary-title="Covid-19 Assistant"
            show-co-pilot
          ></ui5-shellbar>
          <ui5-tabcontainer show-overflow>
            <ui5-tab text="Not well?" icon="stethoscope" selected>
              <TabEligibilityChecker />
            </ui5-tab>
            <ui5-tab text="More Info" icon="message-information">
              <TabMoreInfo />
            </ui5-tab>
          </ui5-tabcontainer>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
