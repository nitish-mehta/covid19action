/**
 * @file Component managing the Eligibility Tab
 */
import "@ui5/webcomponents/dist/Switch";
import React, { useReducer, useRef, useEffect } from "react";

import "@ui5/webcomponents/dist/Label";
import "@ui5/webcomponents/dist/Switch";

const initialState = {
  fever: false,
  runnyNose: false,
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

  // manage ref and event
  const feverRef = useRef();
  useEffect(() => {
    if (feverRef.current) {
      feverRef.current.addEventListener("change", event =>
        dispatch({ type: "toggle", payload: "fever" })
      );
    }
  }, []);
  // manage ref and event
  const runnyNoseRef = useRef();
  useEffect(() => {
    if (runnyNoseRef.current) {
      runnyNoseRef.current.addEventListener("change", event =>
        dispatch({ type: "toggle", payload: "runnyNose" })
      );
    }
  }, []);
  // manage ref and event
  const soreThroatRef = useRef();
  useEffect(() => {
    if (soreThroatRef.current) {
      soreThroatRef.current.addEventListener("change", event =>
        dispatch({ type: "toggle", payload: "soreThroat" })
      );
    }
  }, []);
  // manage ref and event
  const coughRef = useRef();
  useEffect(() => {
    if (coughRef.current) {
      coughRef.current.addEventListener("change", event =>
        dispatch({ type: "toggle", payload: "cough" })
      );
    }
  }, []);
  // manage ref and event
  const difficultyBreathingRef = useRef();
  useEffect(() => {
    if (difficultyBreathingRef.current) {
      difficultyBreathingRef.current.addEventListener("change", event =>
        dispatch({ type: "toggle", payload: "difficultyBreathing" })
      );
    }
  }, []);
  // manage ref and event
  const relevantTravelHistoryRef = useRef();
  useEffect(() => {
    if (relevantTravelHistoryRef.current) {
      relevantTravelHistoryRef.current.addEventListener("change", event =>
        dispatch({ type: "toggle", payload: "relevantTravelHistory" })
      );
    }
  }, []);

  // manage ref and event
  const relevantContactRef = useRef();
  useEffect(() => {
    if (relevantContactRef.current) {
      relevantContactRef.current.addEventListener("change", event =>
        dispatch({ type: "toggle", payload: "relevantContact" })
      );
    }
  }, []);

  // manage ref and event for Submit Button
  // TODO: Fix below to use latest state
  const submitBtnRef = useRef();
  useEffect(() => {
    if (submitBtnRef.current) {
      submitBtnRef.current.addEventListener("click", event => {
        console.log(state);
        if (state.relevantContact || state.relevantTravelHistory) {
          alert("Maybe - Let's see more");
        } else {
          alert("Stay Home! ");
        }
      });
    }
  }, []);

  return (
    <div>
      <div>Please mark all the symptoms that you are currently facing:</div>

      <div className="eligibilityCheckerForm">
        <div className="formRow">
          <ui5-label class="formLabel" wrap>
            Fever :
          </ui5-label>
          <ui5-switch
            ref={feverRef}
            text-on="Yes"
            text-off="No"
            class="formSwitch"
            checked={state.fever || undefined}
            graphical
          ></ui5-switch>
        </div>
        <div className="formRow">
          <ui5-label class="formLabel" wrap>
            Runny Nose:
          </ui5-label>
          <ui5-switch
            ref={runnyNoseRef}
            text-on="Yes"
            text-off="No"
            class="formSwitch"
            checked={state.runnyNose || undefined}
            graphical
          ></ui5-switch>
        </div>
        <div className="formRow">
          <ui5-label class="formLabel" wrap>
            Sore Throat:
          </ui5-label>
          <ui5-switch
            ref={soreThroatRef}
            text-on="Yes"
            text-off="No"
            class="formSwitch"
            checked={state.soreThroat || undefined}
            graphical
          ></ui5-switch>
        </div>
        <div className="formRow">
          <ui5-label class="formLabel" wrap>
            Cough:
          </ui5-label>
          <ui5-switch
            ref={coughRef}
            text-on="Yes"
            text-off="No"
            class="formSwitch"
            checked={state.cough || undefined}
            graphical
          ></ui5-switch>
        </div>
        <div className="formRow">
          <ui5-label class="formLabel" wrap>
            Difficulty breathing:
          </ui5-label>
          <ui5-switch
            ref={difficultyBreathingRef}
            text-on="Yes"
            text-off="No"
            class="formSwitch"
            checked={state.difficultyBreathing || undefined}
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
            ref={relevantTravelHistoryRef}
            text-on="Yes"
            text-off="No"
            class="formSwitch"
            checked={state.relevantTravelHistory || undefined}
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
            ref={relevantContactRef}
            text-on="Yes"
            text-off="No"
            class="formSwitch"
            checked={state.relevantContact || undefined}
            change={() =>
              dispatch({ type: "toggle", payload: "relevantContact" })
            }
          ></ui5-switch>
        </div>
      </div>
      <br />
      <br />
      <ui5-button design="Emphasized" ref={submitBtnRef} class="eligibilityBtn">
        What should I do?
      </ui5-button>
    </div>
  );
};

export default TabEligibilityChecker;
