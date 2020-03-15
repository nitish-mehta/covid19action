import "@ui5/webcomponents/dist/Switch";
import React from "react";

import "@ui5/webcomponents/dist/Label";
import "@ui5/webcomponents/dist/Switch";

const TabEligibilityChecker = () => {
  return (
    <div>
      <div>Please mark all the symptoms you are currently facing:</div>

      <div class="eligibilityCheckerForm">
        <div>
          <ui5-label class="formLabel">Do you currently have fever?</ui5-label>{" "}
          <ui5-switch class="formSwitch" graphical></ui5-switch>
        </div>
        <div>
          <ui5-label class="formLabel">Cough?</ui5-label>{" "}
          <ui5-switch class="formSwitch" graphical></ui5-switch>
        </div>
        <div>
          <ui5-label class="formLabel">Cold ?</ui5-label>{" "}
          <ui5-switch class="formSwitch" graphical></ui5-switch>
        </div>
        <div>
          <ui5-label class="formLabel">
            Have you travelled recently outside India in last 14 days?
          </ui5-label>
          <ui5-switch class="formSwitch" graphical></ui5-switch>
        </div>
        <div>
          <ui5-label class="formLabel">
            Have you been in contact with any confirmed patient?
          </ui5-label>
          <ui5-switch class="formSwitch" graphical></ui5-switch>
        </div>
      </div>
      <ui5-button design="Emphasized">Can I get tested?</ui5-button>

      <div>
        Result: You currently cannot get tested at the medical facility.
      </div>
    </div>
  );
};

export default TabEligibilityChecker;
