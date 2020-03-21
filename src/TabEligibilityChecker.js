/**
 * @file Component managing the Eligibility Tab
 */
import React, { useReducer } from 'react';

import { Button } from '@ui5/webcomponents-react/lib/Button';
import { ButtonDesign } from '@ui5/webcomponents-react/lib/ButtonDesign';
import { Dialog } from '@ui5/webcomponents-react/lib/Dialog';
import { Switch } from '@ui5/webcomponents-react/lib/Switch';
import { Label } from '@ui5/webcomponents-react/lib/Label';

const initialState = {
  fever: false,
  ache: false,
  cough: false,
  difficultyBreathing: false,
  relevantTravelHistory: false,
  relevantContact: false,
  isResultDialogOpen: false,
  haspneumonia: false,
  resultText: '',
  resultGovtAdvisoryText: '',
  resultGeneralGuidanceText: '',
  resultClosingNote: '',
  resultCloseBtnText: 'Close',
};

function reducer(state, action) {
  switch (action.type) {
    case 'toggle':
      return { ...state, [action.payload]: !state[action.payload] };
    case 'openDialog':
      return { ...state, isResultDialogOpen: true };
    case 'closeDialog':
      return { ...state, isResultDialogOpen: false };
    case 'updateResult':
      return {
        ...state,
        resultText: action.payload.text,
        resultGovtAdvisoryText: action.payload.govtAdvisoryText,
        resultGeneralGuidanceText: action.payload.generalGuidanceText
          ? action.payload.generalGuidanceText
          : '',
        resultClosingNote: action.payload.closingNote ? action.payload.closingNote : '',
        resultCloseBtnText: action.payload.closeBtnText ? action.payload.closeBtnText : 'X',
      };
    default:
      throw new Error();
  }
}

/**
 * This component renders a labeled switch
 */
const LabeledSwitch = ({ i18n, label, id, checked, graphical, onChange }) => (
  <div className="formRow">
    <Label className="formLabel" wrap for={id}>
      {label}
    </Label>

    <Switch
      checked={checked}
      textOn={i18n.YES}
      textOff={i18n.NO}
      className="formSwitch"
      graphical={graphical}
      id={id}
      onChange={onChange}
    />
  </div>
);

// labels and action payload keys for symtoms toggles
const getSymptoms = i18n => [
  { key: 'fever', label: i18n.FEVER },
  { key: 'ache', label: i18n.BODYACHE },
  { key: 'cough', label: i18n.COUGH },
  { key: 'difficultyBreathing', label: i18n.DIFFICULTY_BREATHING },
];

// labels and action payload keys for symtoms toggles
const getAdditionalInfo = i18n => [
  { key: 'relevantTravelHistory', label: i18n.Q_HIGH_RISK_COUNTRIES },
  { key: 'relevantContact', label: i18n.Q_CONFIRMED_CASE_CONTACT },
  { key: 'haspneumonia', label: i18n.Q_PNEUMONIA },
];

const TabEligibilityChecker = ({ i18n }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleToggle = event => {
    dispatch({ type: 'toggle', payload: event.originalEvent.target.id });
  };

  const symptoms = getSymptoms(i18n);
  const additionalInfo = getAdditionalInfo(i18n);

  return (
    <div>
      <div>{i18n.MARK_ALL_SYMPTOMS}</div>

      <div className="eligibilityCheckerForm">
        {symptoms.map(symptom => (
          <LabeledSwitch
            key={symptom.key}
            onChange={handleToggle}
            id={symptom.key}
            checked={state[symptom.key]}
            i18n={i18n}
            label={symptom.label}
            graphical
          />
        ))}
        <div>{i18n.ADDITIONAL_INFO}</div>
        {additionalInfo.map(info => (
          <LabeledSwitch
            key={info.key}
            onChange={handleToggle}
            id={info.key}
            checked={state[info.key]}
            i18n={i18n}
            label={info.label}
          />
        ))}
      </div>
      <Button
        className="eligibilityBtn"
        design={ButtonDesign.Emphasized}
        // icon={"add"}
        onClick={() => {
          if (state.relevantContact || state.relevantTravelHistory || state.haspneumonia) {
            // passes first filter criteria

            if (state.fever) {
              // go get checked
              dispatch({
                type: 'updateResult',
                payload: {
                  text: i18n.R_GET_TESTED_TITLE,
                  govtAdvisoryText: i18n.R_GET_TESTED_GOVT_ADVISORY,
                  generalGuidanceText: i18n.R_GET_TESTED_GENERAL_GUIDANCE,
                  closingNote: i18n.R_GET_TESTED_CLOSING_NOTE,
                  closeBtnText: i18n.R_GET_TESTED_CLOSEBTN,
                },
              });
            } else if (state.ache || state.difficultyBreathing || state.cough) {
              // fever is important criteria as a symptom for testing
              // self quarantine for 14 days. Immediately get yourself checked if fever develops
              dispatch({
                type: 'updateResult',
                payload: {
                  text: i18n.R_QUARANTINE_HIGH_TITLE,
                  govtAdvisoryText: i18n.R_QUARANTINE_HIGH_GOVT_ADVISORY,
                  generalGuidanceText: i18n.R_QUARANTINE_HIGH_GENERAL_GUIDANCE,
                  closingNote: i18n.R_QUARANTINE_HIGH_CLOSING_NOTE,
                  closeBtnText: i18n.R_QUARANTINE_HIGH_CLOSEBTN,
                },
              });
            } else {
              // only high risk - no symptoms
              dispatch({
                type: 'updateResult',
                payload: {
                  text: i18n.R_QUARANTINE_LOW_TITLE,
                  govtAdvisoryText: i18n.R_QUARANTINE_LOW_GOVT_ADVISORY,
                  generalGuidanceText: i18n.R_QUARANTINE_LOW_GENERAL_GUIDANCE,
                  closingNote: i18n.R_QUARANTINE_LOW_CLOSING_NOTE,
                  closeBtnText: i18n.R_QUARANTINE_LOW_CLOSEBTN,
                },
              });
            }
          } else if (state.fever && (state.ache || state.difficultyBreathing || state.cough)) {
            // it's probably nothing - but better take precautions
            // as per current advisory, testing only happening for people who have travel history
            dispatch({
              type: 'updateResult',
              payload: {
                text: i18n.R_QUARANTINE_MEDIUM_TITLE,
                govtAdvisoryText: i18n.R_QUARANTINE_MEDIUM_GOVT_ADVISORY,
                generalGuidanceText: i18n.R_QUARANTINE_MEDIUM_GENERAL_GUIDANCE,
                closingNote: i18n.R_QUARANTINE_MEDIUM_CLOSING_NOTE,
                closeBtnText: i18n.R_QUARANTINE_MEDIUM_CLOSEBTN,
              },
            });
          } else if (state.fever || state.ache || state.difficultyBreathing || state.cough) {
            // it's probably nothing - but better take precautions
            // non-fever symptoms
            dispatch({
              type: 'updateResult',
              payload: {
                text: i18n.R_QUARANTINE_MEDIUM_ONLYONE_TITLE,
                govtAdvisoryText: i18n.R_QUARANTINE_MEDIUM_ONLYONE_GOVT_ADVISORY,
                generalGuidanceText: i18n.R_QUARANTINE_MEDIUM_ONLYONE_GENERAL_GUIDANCE,
                closingNote: i18n.R_QUARANTINE_MEDIUM_CLOSING_NOTE,
                closeBtnText: i18n.R_QUARANTINE_MEDIUM_CLOSEBTN,
              },
            });
          } else {
            // everythings seems to be perfectly well.
            // social distance to keep it that way and educate others :)
            dispatch({
              type: 'updateResult',
              payload: {
                text: i18n.R_SOCIAL_DISTANCING_TITLE,
                govtAdvisoryText: i18n.R_SOCIAL_DISTANCING_GOVT_ADVISORY,
                generalGuidanceText: i18n.R_SOCIAL_DISTANCING_GENERAL_GUIDANCE,
                closingNote: i18n.R_SOCIAL_DISTANCING_CLOSING_NOTE,
                closeBtnText: i18n.R_SOCIAL_DISTANCING_CLOSEBTN,
              },
            });
          }

          dispatch({ type: 'openDialog' });
        }}
      >
        {i18n.ELIGIBILITY_TEST_BTN}
      </Button>

      <Dialog
        initialFocus={''}
        headerText={i18n.R_DIALOG_TITLE}
        stretch={false}
        open={state.isResultDialogOpen}
        footer={
          <Button className="eligibilityBtn" onClick={() => dispatch({ type: 'closeDialog' })}>
            {state.resultCloseBtnText}
          </Button>
        }
      >
        <div style={{ width: '300px', height: '400px' }}>
          <Label wrap>{state.resultText}</Label>
          <br />
          <br />
          <Label wrap className="boldText">
            {i18n.GOVT_ADVISORY}
          </Label>
          <Label wrap>{state.resultGovtAdvisoryText}</Label>
          <br />
          <br />
          <Label wrap className="boldText">
            {i18n.GENERAL_GUIDANCE}
          </Label>
          <Label wrap>{state.resultGeneralGuidanceText}</Label>
          <br />
          <br />
          <Label wrap>{state.resultClosingNote}</Label>
        </div>
      </Dialog>
    </div>
  );
};

export default TabEligibilityChecker;
