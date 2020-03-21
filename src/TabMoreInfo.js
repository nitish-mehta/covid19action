import React from 'react';

import '@ui5/webcomponents/dist/Label';
import '@ui5/webcomponents/dist/Link';
import { Panel } from '@ui5/webcomponents-react/lib/Panel';
import { Label } from '@ui5/webcomponents-react/lib/Label';
import { Carousel } from '@ui5/webcomponents-react/lib/Carousel';

const TabMoreInfo = ({ i18n }) => {
  const aFAQ = [
    {
      code: '1',
      ques: 'Should I get tested for the Virus?',
      ans: 'Use eligibility tester to find out.',
    },
    {
      code: '2',
      ques: 'How long does it take for symptoms to be visible?',
      ans:
        'In *most* cases, the symptoms (fever/cough/body ache/difficulty in breathing/etc.) become visible within 5 to 7 days.\nBut studies have shown that it may take upto 14 days for the symptoms to come up.',
    },
    {
      code: '3',
      ques: 'Should I wear a mask?',
      ans:
        'If you have a cough & cold, you should wear a mask to protect others.\nIf you are a healthcare worker looking after COVID-19 / CoronaVirus affected patients, it is recommended that you wear a mask. \nIn most other cases, you do not need to wear a mask. Wearing a mask incorrectly and touching your face to adjust it can actually increase your chances of infection.',
    },
  ];

  return (
    <div>
      <div>
        <ui5-title level="H3">{i18n.USEFUL_TRACKING_WEBSITES}</ui5-title>
        <ul>
          <li>
            <ui5-label>[India]</ui5-label>{' '}
            <ui5-link href="https://covidout.in/" target="_blank" wrap>
              https://covidout.in/
            </ui5-link>
          </li>
          <li>
            <ui5-label>[Global]</ui5-label>{' '}
            <ui5-link href="https://ourworldindata.org/coronavirus" target="_blank" wrap>
              https://ourworldindata.org/coronavirus
            </ui5-link>
          </li>
          <li>
            <ui5-label>[Global]</ui5-label>{' '}
            <ui5-link href="https://www.worldometers.info/coronavirus/" target="_blank" wrap>
              https://ncov2019.live/
            </ui5-link>
          </li>
          <li>
            <ui5-link href="https://www.worldometers.info/coronavirus/" target="_blank" wrap>
              https://www.worldometers.info/coronavirus/
            </ui5-link>
          </li>
        </ul>
        <ui5-title level="H3">{i18n.LEARN_AND_SHARE}</ui5-title>
        <ul>
          <li>
            <ui5-link
              href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public"
              target="_blank"
              wrap
            >
              WHO: Advice for Public
            </ui5-link>
          </li>
          <br />
          <li>
            <ui5-link href="https://corona-azure.now.sh/" target="_blank" wrap>
              Why social distancing matters?
            </ui5-link>
          </li>
          <li>
            <ui5-label wrap>
              {
                'Below is a simulation of how virus transmits based on contact with other people. Focus on the curve.'
              }
            </ui5-label>
            <br />
            <ui5-link
              href="https://www.washingtonpost.com/graphics/2020/world/corona-simulator/"
              target="_blank"
              wrap
            >
              Credits: Washington Post (Social Distancing - Flatten the curve)
            </ui5-link>
          </li>
          <Carousel
            width="400px"
            activePage={0}
            onPageChanged={() => {}}
            arrowsPlacement={'PageIndicator'}
            showPageIndicator={true}
            loop={false}
            pageIndicatorPlacement={'Bottom'}
          >
            <div>
              <Label wrap className="newLineWrap carouselText">
                {'Everyone moves freely'}
              </Label>
              <img
                width="400px"
                src="/assets/social_distance_0_none.gif"
                alt="Social Distancing - None"
              ></img>
            </div>
            <div>
              <Label wrap className="newLineWrap carouselText">
                {'Some areas are quarantined'}
              </Label>
              <img
                width="400px"
                src="/assets/social_distance_1_quarantine.gif"
                alt="Social Distancing - None"
              ></img>
            </div>
            <div>
              <Label wrap className="newLineWrap carouselText">
                {'Moderate distancing (1 in 4 moves)'}
              </Label>
              <img
                width="400px"
                src="/assets/social_distance_2_partial.gif"
                alt="Social Distancing - None"
              ></img>
            </div>
            <div>
              <Label wrap className="newLineWrap carouselText">
                {'Moderate distancing (1 in 8 moves)'}
              </Label>
              <img
                width="400px"
                src="/assets/social_distance_3_extensive.gif"
                alt="Social Distancing - None"
              ></img>
            </div>
            <div>
              <Label wrap className="newLineWrap carouselText">
                {'Comparison Graph \n Steep curve results in healthcare breakdown'}
              </Label>
              <img
                width="400px"
                src="/assets/social_distance_comparison.png"
                alt="Social Distancing - None"
              ></img>
            </div>
          </Carousel>
        </ul>
        <ui5-title level="H3">{'Frequently Asked Questions'}</ui5-title>

        {aFAQ.map(currentVal => {
          if (currentVal.code === 4) {
            return (
              <Panel headerText={currentVal.ques} fixed={false} collapsed={true} header={null}>
                <Label wrap className="newLineWrap">
                  {currentVal.ans}
                </Label>
              </Panel>
            );
          } else {
            return (
              <Panel headerText={currentVal.ques} fixed={false} collapsed={true} header={null}>
                <Label wrap className="newLineWrap">
                  {currentVal.ans}
                </Label>
              </Panel>
            );
          }
        })}
      </div>
    </div>
  );
};

export default TabMoreInfo;
