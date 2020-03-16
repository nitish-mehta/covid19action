import "@ui5/webcomponents/dist/Switch";
import React, { useReducer } from "react";

import "@ui5/webcomponents/dist/Label";
import "@ui5/webcomponents/dist/Switch";

const initialState = {
  fever: false,
  runnyNose: true,
  soreThroat: false,
  cough: false,
  difficultyBreathing: false,
  relevantTravelHistory: false,
  relevantContact: false
};

function reducer(state, action) {
  console.log(action, state);
  switch (action.type) {
    case "toggle":
      return { ...state, [action.payload]: !state[action.payload] };
    default:
      throw new Error();
  }
}

const TabEligibilityChecker = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  return (
    <div>
      <div>Please mark all the symptoms that you are currently facing:</div>

      <div className="eligibilityCheckerForm">
        <div className="formRow">
          <ui5-label class="formLabel" wrap>
            Fever :
          </ui5-label>
          <ui5-switch
            text-on="Yes"
            text-off="No"
            class="formSwitch"
            checked={state.fever}
            change={() => dispatch({ type: "toggle", payload: "fever" })}
            graphical
          ></ui5-switch>
        </div>
        <div className="formRow">
          <ui5-label class="formLabel" wrap>
            Runny Nose:
          </ui5-label>
          <ui5-switch
            text-on="Yes"
            text-off="No"
            class="formSwitch"
            checked={state.runnyNose}
            change={() => dispatch({ type: "toggle", payload: "runnyNose" })}
            graphical
          ></ui5-switch>
        </div>
        <div className="formRow">
          <ui5-label class="formLabel" wrap>
            Sore Throat:
          </ui5-label>
          <ui5-switch
            text-on="Yes"
            text-off="No"
            class="formSwitch"
            checked={state.soreThroat}
            change={() => dispatch({ type: "toggle", payload: "soreThroat" })}
            graphical
          ></ui5-switch>
        </div>
        <div className="formRow">
          <ui5-label class="formLabel" wrap>
            Cough:
          </ui5-label>
          <ui5-switch
            text-on="Yes"
            text-off="No"
            class="formSwitch"
            checked={state.cough}
            change={() => dispatch({ type: "toggle", payload: "cough" })}
            graphical
          ></ui5-switch>
        </div>
        <div className="formRow">
          <ui5-label class="formLabel" wrap>
            Difficulty breathing:
          </ui5-label>
          <ui5-switch
            text-on="Yes"
            text-off="No"
            class="formSwitch"
            checked={state.difficultyBreathing}
            change={() =>
              dispatch({ type: "toggle", payload: "difficultyBreathing" })
            }
            graphical
          ></ui5-switch>
        </div>
        <div>Additional Information:</div>
        <div className="formRow">
          <ui5-label class="formLabel" wrap>
            Have you visited any COVID-19 affected countries in last 14 days?
          </ui5-label>
          <ui5-switch
            text-on="Yes"
            text-off="No"
            class="formSwitch"
            checked={state.relevantTravelHistory}
            change={() =>
              dispatch({ type: "toggle", payload: "relevantTravelHistory" })
            }
          ></ui5-switch>
        </div>
        <div className="formRow">
          <ui5-label class="formLabel" wrap>
            Have you been in contact with any confirmed positive case?
          </ui5-label>
          <ui5-switch
            text-on="Yes"
            text-off="No"
            class="formSwitch"
            checked={state.relevantContact}
            change={() =>
              dispatch({ type: "toggle", payload: "relevantContact" })
            }
          ></ui5-switch>
        </div>
      </div>
      <br />
      <br />
      <ui5-button design="Emphasized" class="eligibilityBtn">
        What should I do?
      </ui5-button>
    </div>
  );
};

export default TabEligibilityChecker;
