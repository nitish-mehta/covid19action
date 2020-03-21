import React from 'react';

import { Title } from '@ui5/webcomponents-react/lib/Title';
import { Label } from '@ui5/webcomponents-react/lib/Label';
import { Link } from '@ui5/webcomponents-react/lib/Link';

const TabMoreInfo = ({ i18n }) => {
  return (
    <div>
      <div>
        <Title level="H3">{i18n.USEFUL_TRACKING_WEBSITES}</Title>
        <ul>
          <li>
            <Label>[India]</Label>{' '}
            <Link href="https://covidout.in/" target="_blank" wrap>
              https://covidout.in/
            </Link>
          </li>
          <li>
            <Label>[Global]</Label>{' '}
            <Link href="https://www.worldometers.info/coronavirus/" target="_blank" wrap>
              https://ncov2019.live/
            </Link>
          </li>
          <li>
            <Link href="https://www.worldometers.info/coronavirus/" target="_blank" wrap>
              https://www.worldometers.info/coronavirus/
            </Link>
          </li>
        </ul>
        <Title level="H3">{i18n.LEARN_AND_SHARE}</Title>
        <ul>
          <li>
            <Link
              href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public"
              target="_blank"
              wrap
            >
              WHO: Advice for Public
            </Link>
          </li>
          <br />
          <li>
            <Link href="https://corona-azure.now.sh/" target="_blank" wrap>
              Why social distancing matters?
            </Link>
          </li>
          <li>
            <Link
              href="https://www.washingtonpost.com/graphics/2020/world/corona-simulator/"
              target="_blank"
              wrap
            >
              Social Distancing Simulator - Flatten the curve
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TabMoreInfo;
