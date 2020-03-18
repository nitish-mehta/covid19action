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
          : "X"
      };
    default:
      throw new Error();
  }
}

const TabEligibilityChecker = ({ i18n }) => {
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

  return (
    <div>
      <div>{i18n.MARK_ALL_SYMPTOMS}</div>

      <div className="eligibilityCheckerForm">
        <div className="formRow">
          <ui5-label class="formLabel" wrap>
            {i18n.FEVER}
          </ui5-label>
          <ui5-switch
            ref={feverRef}
            text-on={i18n.YES}
            text-off={i18n.NO}
            class="formSwitch"
            checked={state.fever || undefined}
            graphical
          ></ui5-switch>
        </div>
        <div className="formRow">
          <ui5-label class="formLabel" wrap>
            {i18n.RUNNY_NOSE}
          </ui5-label>
          <ui5-switch
            ref={runnyNoseRef}
            text-on={i18n.YES}
            text-off={i18n.NO}
            class="formSwitch"
            checked={state.runnyNose || undefined}
            graphical
          ></ui5-switch>
        </div>

        <div className="formRow">
          <ui5-label class="formLabel" wrap>
            {i18n.COUGH}
          </ui5-label>
          <ui5-switch
            ref={coughRef}
            text-on={i18n.YES}
            text-off={i18n.NO}
            class="formSwitch"
            checked={state.cough || undefined}
            graphical
          ></ui5-switch>
        </div>
        <div className="formRow">
          <ui5-label class="formLabel" wrap>
            {i18n.DIFFICULTY_BREATHING}
          </ui5-label>
          <ui5-switch
            ref={difficultyBreathingRef}
            text-on={i18n.YES}
            text-off={i18n.NO}
            class="formSwitch"
            checked={state.difficultyBreathing || undefined}
            change={() =>
              dispatch({ type: "toggle", payload: "difficultyBreathing" })
            }
            graphical
          ></ui5-switch>
        </div>
        <div>{i18n.ADDITIONAL_INFO}</div>
        <div className="formRow">
          <ui5-label class="formLabel" wrap>
            {i18n.Q_HIGH_RISK_COUNTRIES}
          </ui5-label>
          <ui5-switch
            ref={relevantTravelHistoryRef}
            text-on={i18n.YES}
            text-off={i18n.NO}
            class="formSwitch"
            checked={state.relevantTravelHistory || undefined}
            change={() =>
              dispatch({ type: "toggle", payload: "relevantTravelHistory" })
            }
          ></ui5-switch>
        </div>
        <div className="formRow">
          <ui5-label class="formLabel" wrap>
            {i18n.Q_CONFIRMED_CASE_CONTACT}
          </ui5-label>
          <ui5-switch
            ref={relevantContactRef}
            text-on={i18n.YES}
            text-off={i18n.NO}
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
                  text: i18n.R_GET_TESTED_TITLE,
                  description: i18n.R_GET_TESTED_DESCR1,
                  description2: i18n.R_GET_TESTED_DESCR2,
                  closeBtnText: i18n.R_GET_TESTED_CLOSEBTN
                }
              });
            } else if (
              state.runnyNose ||
              state.difficultyBreathing ||
              state.cough
            ) {
              // fever is important criteria as a symptom for testing
              // self quarantine for 14 days. Immediately get yourself checked if fever develops
              dispatch({
                type: "updateResult",
                payload: {
                  text: i18n.R_QUARANTINE_HIGH_TITLE,
                  description: i18n.R_QUARANTINE_HIGH_DESCR1,
                  description2: i18n.R_QUARANTINE_HIGH_DESCR2,
                  closeBtnText: i18n.R_QUARANTINE_HIGH_CLOSEBTN
                }
              });
            } else {
              // only high risk - no symptoms
              dispatch({
                type: "updateResult",
                payload: {
                  text: i18n.R_SOCIAL_DISTANCE_HIGH_TITLE,
                  description: i18n.R_SOCIAL_DISTANCE_HIGH_DESCR1,
                  description2: i18n.R_SOCIAL_DISTANCE_HIGH_DESCR2,
                  closeBtnText: i18n.R_SOCIAL_DISTANCE_HIGH_CLOSEBTN
                }
              });
            }
          } else if (
            state.fever ||
            state.runnyNose ||
            state.difficultyBreathing ||
            state.cough
          ) {
            // it's probably nothing - but better take precautions
            // as per current advisory, testing only happening for people who have travel history
            dispatch({
              type: "updateResult",
              payload: {
                text: i18n.R_QUARANTINE_TITLE,
                description: i18n.R_QUARANTINE_DESCR1,
                description2: i18n.R_QUARANTINE_DESCR2,
                closeBtnText: i18n.R_QUARANTINE_CLOSEBTN
              }
            });
          } else {
            // everythings seems to be perfectly well.
            // social distance to keep it that way and educate others :)
            dispatch({
              type: "updateResult",
              payload: {
                text: i18n.R_SOCIAL_DISTANCE_TITLE,
                description: i18n.R_SOCIAL_DISTANCE_DESCR1,
                description2: i18n.R_SOCIAL_DISTANCE_DESCR2,
                closeBtnText: i18n.R_SOCIAL_DISTANCE_CLOSEBTN
              }
            });
          }

          dispatch({ type: "openDialog" });
        }}
      >
        {i18n.ELIGIBILITY_TEST_BTN}
      </Button>
      <Dialog
        initialFocus={""}
        headerText={i18n.R_DIALOG_TITLE}
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
