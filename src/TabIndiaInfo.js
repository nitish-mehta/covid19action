import React from 'react';

import { Title } from '@ui5/webcomponents-react/lib/Title';
import { Label } from '@ui5/webcomponents-react/lib/Label';
import { Link } from '@ui5/webcomponents-react/lib/Link';

const TabIndiaInfo = ({ i18n }) => {
  return (
    <div>
      <div>
        <Title level="H3">{i18n.IMPORTANT_WEBSITES}</Title>
        <ul>
          <li>
            <Label>{i18n.T_INDIA_WEBSITE}</Label>
            {'  '}
            <Link href="https://www.mohfw.gov.in/" target="_blank" wrap>
              {i18n.MINISTRY_OF_HEALTH}
            </Link>
          </li>
          <li>
            <Label>{i18n.T_INDIA_WEBSITE} </Label>
            {'  '}
            <Link href="https://icmr.nic.in/content/covid-19" target="_blank" wrap>
              {i18n.ICMR_FULL}
            </Link>
          </li>
        </ul>
        <Title level="H3">{i18n.T_TEST_CENTER_HELPLINE}</Title>
        <Label wrap>(Last Updated : 17 March 2020)</Label>

        <ul>
          <li>
            <Label>{i18n.CENTRAL_HELPLINE}</Label>
            {' :  '}
            <Link href="tel:+91-11-23978046">+91-11-23978046</Link>
          </li>
          <li>
            <Label>{i18n.ALL_HELPLINE_NUMBERS}</Label>
            {' :  '}
            <Link href="https://www.mohfw.gov.in/coronvavirushelplinenumber.pdf" target="_blank">
              {i18n.ALL_STATE_UT}
            </Link>
          </li>
          <li>
            <Label>Email</Label>
            {' :  '}
            <Link href="mailto:ncov2019@gmail.com " target="_blank">
              ncov2019@gmail.com
            </Link>
          </li>
          <br />
          <li>
            <Link
              href="https://icmr.nic.in/sites/default/files/upload_documents/COVID_19_Testing_Laboratories.pdf"
              target="_blank"
            >
              {i18n.LIST_TESTING_SITE}
            </Link>
          </li>
          <li>
            <Link
              href="https://icmr.nic.in/sites/default/files/upload_documents/COVID_19_Testing_Sites.pdf"
              target="_blank"
            >
              {i18n.MAP_TESTING_SITES}
            </Link>
          </li>
          <li>
            <Link
              href="http://icmr.nic.in/sites/default/files/upload_documents/List_of_VRDL_V2.pdf"
              target="_blank"
            >
              {i18n.LAB_ACROSS_INDIA}
            </Link>
          </li>
        </ul>
        <Title level="H3"> {i18n.ADDITIONAL_INFO} </Title>
        <ul>
          <li>
            <Label>Youtube (Ministry of Health) </Label>
            {' :  '}
            <Link href="https://www.mohfw.gov.in/FINAL_14_03_2020_Hindi.pdf" target="_blank" wrap>
              COVID-19 Management Videos
            </Link>
          </li>
          <li>
            <Label>Ministry of Health (14 March 2020) </Label>
            {' :  '}
            <Link href="https://www.mohfw.gov.in/FINAL_14_03_2020_ENg.pdf" target="_blank" wrap>
              When to get tested?
            </Link>
          </li>

          <li>
            <Label>Ministry of Health (14 March 2020) </Label>
            {' :  '}
            <ui5-link
              href="https://www.mohfw.gov.in/FINAL_14_03_2020_Hindi.pdf"
              target="_blank"
              wrap
            >
              परीक्षण कब करवाना है?
            </ui5-link>
          </li>
          <li>
            <Label>ICMR</Label>
            {' :  '}
            <ui5-link
              href="https://icmr.nic.in/sites/default/files/upload_documents/Advisory_COVID19_9Mar2020.pdf"
              target="_blank"
              wrap
            >
              Testing Strategy (9 March 2020)
            </ui5-link>
          </li>
        </ul>
        <br />
      </div>
    </div>
  );
};

export default TabIndiaInfo;
