import React from "react";
import "./App.css";

import TabEligibilityChecker from "./TabEligibilityChecker";
import TabIndiaInfo from "./TabIndiaInfo";
import TabMoreInfo from "./TabMoreInfo";

import { Button } from "@ui5/webcomponents-react/lib/Button";
import { ThemeProvider } from "@ui5/webcomponents-react/lib/ThemeProvider";

import "@ui5/webcomponents/dist/TabContainer";
import "@ui5/webcomponents/dist/Tab";
import "@ui5/webcomponents/dist/Label";

import "@ui5/webcomponents-icons/dist/json-imports/Icons.js";
import { ButtonDesign } from "@ui5/webcomponents-react/lib/ButtonDesign";
// import "@ui5/webcomponents-icons/dist/icons/activities.js";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <div className="Covid19App">
          <div className="headerShellBar">
            <div class="shellBarLeft"></div>
            <div class="shellBarCenter">Covid-19 India</div>
            <Button
              design={ButtonDesign.Transparent}
              icon={"sys-help"}
              className="shellBarRight"
              onClick={() => {}}
            ></Button>
            {/* <Button
              design={ButtonDesign.Transparent}
              icon={"action"}
              className="helpBtn"
              onClick={() => {}}
            ></Button> */}
          </div>

          <ui5-tabcontainer class="c19IconTab" show-overflow>
            <ui5-tab text="Unwell?" icon="stethoscope" selected>
              <TabEligibilityChecker />
            </ui5-tab>
            <ui5-tab text="India" icon="hint">
              <TabIndiaInfo />
            </ui5-tab>
            <ui5-tab text="" icon="globe">
              <TabMoreInfo />
            </ui5-tab>
          </ui5-tabcontainer>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
