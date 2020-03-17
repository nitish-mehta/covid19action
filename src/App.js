import React, { useReducer } from "react";
import "./App.css";

import i18n from "./i18n/i18n.json";

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
import { Dialog } from "@ui5/webcomponents-react/lib/Dialog";

const initialState = {
  isHelpDialogOpen: false
};

function reducer(state, action) {
  switch (action.type) {
    case "openDialog":
      return { ...state, isHelpDialogOpen: true };
    case "closeDialog":
      return { ...state, isHelpDialogOpen: false };
    default:
      throw new Error();
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ThemeProvider>
      <div className="App">
        <div className="Covid19App">
          <div className="headerShellBar">
            <div className="shellBarLeft"></div>
            <div className="shellBarCenter">{i18n.HOME_TITLE}</div>
            <div className="shellBarRight">
              <Button
                design={ButtonDesign.Transparent}
                icon={"sys-help"}
                className="shellBarBtn"
                onClick={() => dispatch({ type: "openDialog" })}
              ></Button>
              {/* <Button
                design={ButtonDesign.Transparent}
                icon={"action"}
                className="shellBarBtn"
                onClick={() => {}}
              ></Button> */}
            </div>
          </div>

          <ui5-tabcontainer class="c19IconTab" show-overflow>
            <ui5-tab text={i18n.UNWELL} icon="stethoscope" selected>
              <TabEligibilityChecker />
            </ui5-tab>
            <ui5-tab text={i18n.INDIA} icon="hint">
              <TabIndiaInfo />
            </ui5-tab>
            <ui5-tab text="" icon="globe">
              <TabMoreInfo />
            </ui5-tab>
          </ui5-tabcontainer>

          <Dialog
            headerText={i18n.ABOUT_THIS_WEBSITE}
            stretch={false}
            open={state.isHelpDialogOpen}
            footer={
              <Button
                className="dialogFooterBtn"
                onClick={() => dispatch({ type: "closeDialog" })}
              >
                {i18n.CLOSE}
              </Button>
            }
          >
            <div style={{ width: "300px", height: "300px" }}>
              <ui5-label wrap>{i18n.WEBSITE_DESCRIPTION_1}</ui5-label>
              <br />
              <br />
              <ui5-label wrap>
                {i18n.WEBSITE_DESCRIPTION_2}{" "}
                <ui5-link
                  href="https://github.com/nitish-mehta/covid19action"
                  target="_blank"
                  wrap
                >
                  GitHub
                </ui5-link>
                {i18n.WEBSITE_DESCRIPTION_3}
              </ui5-label>
              <br />
              <ui5-label wrap>
                {i18n.WEBSITE_DESCRIPTION_4}{" "}
                <ui5-link
                  href="https://twitter.com/nitish_mehta"
                  target="_blank"
                  wrap
                >
                  Twitter
                </ui5-link>{" "}
                {i18n.AND}{" "}
                <ui5-link
                  href="https://www.linkedin.com/in/nitishmehta08/"
                  target="_blank"
                  wrap
                >
                  LinkedIn.
                </ui5-link>{" "}
              </ui5-label>
              <br />
              <br />
              <ui5-label wrap>{i18n.WEBSITE_DESCRIPTION_5}</ui5-label>
            </div>
          </Dialog>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
