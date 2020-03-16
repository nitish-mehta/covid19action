/**
 * @file Component managing the Eligibility Tab
 */
import "@ui5/webcomponents/dist/Switch";
import React, { useReducer, useRef, useEffect } from "react";

import { Button } from "@ui5/webcomponents-react/lib/Button";
import { ButtonDesign } from "@ui5/webcomponents-react/lib/ButtonDesign";
import { Dialog } from "@ui5/webcomponents-react/lib/Dialog";

import "@ui5/webcomponents/dist/Label";
import "@ui5/webcomponents/dist/Switch";

const initialState = {
  fever: false,
  runnyNose: false,
  soreThroat: false,
  cough: false,
  difficultyBreathing: false,
  relevantTravelHistory: false,
  relevantContact: false,
  isResultDialogOpen: false,
  resultText: "",
  resultTextDescription: "",
  resultTextDescription2: "",
  resultCloseBtnText: "Close"
};

function reducer(state, action) {
  switch (action.type) {
    case "toggle":
      return { ...state, [action.payload]: !state[action.payload] };
    case "openDialog":
      return { ...state, isResultDialogOpen: true };
    case "closeDialog":
      return { ...state, isResultDialogOpen: false };
    case "updateResult":
      return {
        ...state,
        resultText: action.payload.text,
        resultTextDescription: action.payload.description,
        resultTextDescription2: action.payload.description2
          ? action.payload.description2
          : "",
        resultCloseBtnText: action.payload.closeBtnText
          ? action.payload.closeBtnText
          : "Close"
      };
    default:
      throw new Error();
  }
}

const TabEligibilityChecker = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
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
      <Button
        className="eligibilityBtn"
        design={ButtonDesign.Emphasized}
        // icon={"add"}
        onClick={() => {
          if (state.relevantContact || state.relevantTravelHistory) {
            // passes first filter criteria

            if (state.fever) {
              // go get checked
              dispatch({
                type: "updateResult",
                payload: {
                  text: "Get yourself screened.",
                  description:
                    "As per the health ministry advisory, you should get yourself screened at the nearest CoronaVirus testing center. Check 'More Info' tab to find the nearest center and helpling number",
                  description2:
                    "Keep yourself quarantined and take precautions at all times in the meantime",
                  closeBtnText: "Close & Check Centers"
                }
              });
            } else if (
              state.runnyNose ||
              state.soreThroat ||
              state.difficultyBreathing ||
              state.cough
            ) {
              // fever is important criteria as a symptom.
              // self quarantine for 14 days. Immediately get yourself checked if fever develops
              dispatch({
                type: "updateResult",
                payload: {
                  text: "Self-Quarantine for 14 days",
                  description:
                    "As per the health ministry advisory (dated 9-March-2020), you are not yet eligible for the CoronaVirus screening test. You MUST self-quarantine yourself for a period of 14 days. In case you develop a fever, you should immediately get yourself tested for COVID-19.",
                  description2:
                    "Kindly call the government helpline numbers (available in next tab) for a confirmation and best practices during quarantine period.",
                  closeBtnText: "Close & Check More Info"
                }
              });
            }
          } else if (
            state.fever ||
            state.runnyNose ||
            state.soreThroat ||
            state.difficultyBreathing ||
            state.cough
          ) {
            // it's probably nothing - but better take precautions
            // as per current advisory (9Mar2020), you should self quarantine
            dispatch({
              type: "updateResult",
              payload: {
                text: "Self-Quarantine for 14 days",
                description:
                  "It's probably nothing - but you should take precautions. As per the health ministry advisory (dated 9-March-2020), you are not yet eligible for the CoronaVirus screening test and are advised to self-quarantine yourself for a period of 14 days. ",
                description2:
                  "Kindly call the government helpline numbers (available in next tab) for a confirmation and best practices during quarantine period.",
                closeBtnText: "Close & Check More Info"
              }
            });
          } else {
            // everythings seems to be perfectly well.
            // social distance to keep it that way and educate others :)
            dispatch({
              type: "updateResult",
              payload: {
                text: "You are as fit as it gets!",
                description:
                  "You seem to be in good health. Practice social distancing and continue to keep yourself and others around you safe. ",
                description2:
                  "Don't forget to educate others about the precautions and play the role of a savior in these troubled times :)",
                closeBtnText: "Close"
              }
            });
          }

          dispatch({ type: "openDialog" });
        }}
      >
        What should I do?
      </Button>
      <Dialog
        initialFocus={""}
        headerText={"Here's what you should do"}
        stretch={false}
        open={state.isResultDialogOpen}
        footer={
          <Button
            className="eligibilityBtn"
            onClick={() => dispatch({ type: "closeDialog" })}
          >
            {state.resultCloseBtnText}
          </Button>
        }
      >
        <div style={{ width: "300px", height: "300px" }}>
          <ui5-label wrap>{state.resultText}</ui5-label>
          <br />
          <br />
          <br />
          <ui5-label wrap>{state.resultTextDescription}</ui5-label>
          <br />
          <br />
          <ui5-label wrap>{state.resultTextDescription2}</ui5-label>
        </div>
      </Dialog>
    </div>
  );
};

export default TabEligibilityChecker;
