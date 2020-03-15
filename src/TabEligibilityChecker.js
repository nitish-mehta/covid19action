import "@ui5/webcomponents/dist/Switch";
import React from "react";

import "@ui5/webcomponents/dist/Label";
import "@ui5/webcomponents/dist/Switch";

const TabEligibilityChecker = () => {
  return (
    <div>
      <div>Please mark all the symptoms that you are currently facing:</div>

      <div class="eligibilityCheckerForm">
        <div class="formRow">
          <ui5-label class="formLabel" wrap>
            Fever :
          </ui5-label>
          <ui5-switch
            text-on="Yes"
            text-off="No"
            class="formSwitch"
            graphical
          ></ui5-switch>
        </div>
        <div class="formRow">
          <ui5-label class="formLabel" wrap>
            Runny Nose:
          </ui5-label>
          <ui5-switch
            text-on="Yes"
            text-off="No"
            class="formSwitch"
            graphical
          ></ui5-switch>
        </div>
        <div class="formRow">
          <ui5-label class="formLabel" wrap>
            Sore Throat:
          </ui5-label>
          <ui5-switch
            text-on="Yes"
            text-off="No"
            class="formSwitch"
            graphical
          ></ui5-switch>
        </div>
        <div class="formRow">
          <ui5-label class="formLabel" wrap>
            Cough:
          </ui5-label>
          <ui5-switch
            text-on="Yes"
            text-off="No"
            class="formSwitch"
            graphical
          ></ui5-switch>
        </div>
        <div class="formRow">
          <ui5-label class="formLabel" wrap>
            Difficulty breathing:
          </ui5-label>
          <ui5-switch
            text-on="Yes"
            text-off="No"
            class="formSwitch"
            graphical
          ></ui5-switch>
        </div>
        <div>Additional Information:</div>
        <div class="formRow">
          <ui5-label class="formLabel" wrap>
            Have you visited any COVID-19 affected countries in last 14 days?
          </ui5-label>
          <ui5-switch
            text-on="Yes"
            text-off="No"
            class="formSwitch"
          ></ui5-switch>
        </div>
        <div class="formRow">
          <ui5-label class="formLabel" wrap>
            Have you been in contact with any confirmed positive case?
          </ui5-label>
          <ui5-switch
            text-on="Yes"
            text-off="No"
            class="formSwitch"
          ></ui5-switch>
        </div>
      </div>
      <br />
      <br />
      <ui5-button disabled design="Emphasized" class="eligibilityBtn">
        What should I do?
      </ui5-button>
    </div>
  );
};

export default TabEligibilityChecker;
