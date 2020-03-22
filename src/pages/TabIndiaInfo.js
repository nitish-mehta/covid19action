import React from 'react';

import { Title } from '@ui5/webcomponents-react/lib/Title';
import { Label } from '@ui5/webcomponents-react/lib/Label';
import { Link } from '@ui5/webcomponents-react/lib/Link';

import { WhatsappIcon } from 'react-share';

const TabIndiaInfo = ({ i18n }) => {
  return (
    <div>
      <div>
        <Title level="H3">{i18n.T_TEST_CENTER_HELPLINE}</Title>
        <Label wrap className="subHeaderText">
          (Last Updated : 22 March 2020)
        </Label>
        <ul>
          <li>
            <WhatsappIcon class="linkIcon" size={20} round />
            {'   '}
            <Label>{i18n.WHATSAPP_HELPLINE}</Label>
            {' :  '}
            <Link href="https://api.whatsapp.com/send?phone=919013151515&text=Hi&source=&data=">
              {'India Helpline'}
            </Link>
          </li>
          <li>
            <Label>{i18n.PHONE}</Label>
            {' :  '}
            <Link href="tel:+91-11-23978046">+91-11-23978046</Link>
            {' &  '}
            <Link href="tel:1075">1075</Link>
          </li>
          <li>
            <Label>Email</Label>
            {' :  '}
            <Link href="mailto:ncov2019@gmail.com " target="_blank">
              ncov2019@gmail.com
            </Link>
          </li>
        </ul>
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
          <br />
          <li>
            <Label>{i18n.MINISTRY_OF_HEALTH}</Label>
            {' :  '}
            <Link
              href="https://icmr.nic.in/sites/default/files/upload_documents/2020-03-20_covid19_test_v3.pdf"
              target="_blank"
              wrap
            >
              Testing Strategy - Version 3
            </Link>
          </li>
          <li>
            <Label>{i18n.ALL_HELPLINE_NUMBERS}</Label>
            {' :  '}
            <Link href="https://www.mohfw.gov.in/coronvavirushelplinenumber.pdf" target="_blank">
              {i18n.ALL_STATE_UT}
            </Link>
          </li>
          <li>
            <Link
              href="https://icmr.nic.in/sites/default/files/upload_documents/List_of_VRDL_V2.pdf"
              target="_blank"
            >
              {i18n.LAB_ACROSS_INDIA}
            </Link>
          </li>
        </ul>
        <Title level="H3"> {i18n.ADDITIONAL_INFO} </Title>
        <ul>
          <li>
            <Label>Apollo</Label>
            {' :  '}
            <Link href="https://covid.apollo247.com/" target="_blank">
              {i18n.COVID_RISK_SCANNER}
            </Link>
          </li>
          <li>
            <Label>Youtube (Ministry of Health) </Label>
            {' :  '}
            <Link href="https://www.mohfw.gov.in/FINAL_14_03_2020_Hindi.pdf" target="_blank" wrap>
              COVID-19 Management Videos
            </Link>
          </li>
          <li>
            <Label>WHO</Label>
            {' :  '}
            <Link
              href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public"
              target="_blank"
              wrap
            >
              Advice for Public
            </Link>
          </li>
          <li>
            <WhatsappIcon class="linkIcon" size={20} round />
            {'   '}
            <Label>{i18n.WHATSAPP_HELPLINE}</Label>
            {' :  '}
            <Link href="https://api.whatsapp.com/send?phone=41798931892&text=hi&source=&data=">
              WHO
            </Link>
          </li>
        </ul>
        <br />
      </div>
    </div>
  );
};

export default TabIndiaInfo;
