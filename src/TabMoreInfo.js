import React from 'react';

import { Title } from '@ui5/webcomponents-react/lib/Title';
import { Label } from '@ui5/webcomponents-react/lib/Label';
import { Link } from '@ui5/webcomponents-react/lib/Link';
import { Carousel } from '@ui5/webcomponents-react/lib/Carousel';

const TabMoreInfo = ({ i18n }) => {
  return (
    <div>
      <div>
        <Title level="H3" wrap>
          {i18n.SOCIAL_DISTANCING}
        </Title>
        <ul>
          <li>
            <Link href="https://corona-azure.now.sh/" target="_blank" wrap>
              Social Distancing - Experiment
            </Link>
          </li>
          <li>
            <Link
              href="https://www.washingtonpost.com/graphics/2020/world/corona-simulator/"
              target="_blank"
              wrap
            >
              Credits: Washington Post
            </Link>
          </li>
          <Label className="carouselIntroText" wrap>
            {i18n.SOCIAL_DISTANCE_INTRO}
          </Label>
        </ul>
        <Carousel
          width="90%"
          className="socialDistanceCarousel"
          activePage={0}
          onPageChanged={() => {}}
          arrowsPlacement={'PageIndicator'}
          showPageIndicator={true}
          loop={false}
          pageIndicatorPlacement={'Bottom'}
        >
          <div>
            <Label wrap className="newLineWrap carouselText">
              {i18n.SD_FREE_MOVEMENT}
            </Label>
            <img
              width="100%"
              src="/assets/social_distance_0_none.gif"
              alt="Social Distancing - None"
            ></img>
          </div>
          <div>
            <Label wrap className="newLineWrap carouselText">
              {i18n.SD_QUARANTINE}
            </Label>
            <img
              width="100%"
              src="/assets/social_distance_1_quarantine.gif"
              alt="Social Distancing - Quarantine"
            ></img>
          </div>
          <div>
            <Label wrap className="newLineWrap carouselText">
              {i18n.SD_MODERATE}
            </Label>
            <img
              width="100%"
              src="/assets/social_distance_2_partial.gif"
              alt="Social Distancing - Moderate"
            ></img>
          </div>
          <div>
            <Label wrap className="newLineWrap carouselText">
              {i18n.SD_HIGH}
            </Label>
            <img
              width="100%"
              src="/assets/social_distance_3_extensive.gif"
              alt="Social Distancing - High"
            ></img>
          </div>
          <div>
            <Label wrap className="newLineWrap carouselText">
              {i18n.SD_COMPARISON_GRAPH}
            </Label>
            <img
              width="100%"
              src="/assets/social_distance_comparison.png"
              alt="Social Distancing - None"
            ></img>
          </div>
        </Carousel>

        <Title level="H3">{i18n.USEFUL_TRACKING_WEBSITES}</Title>
        <ul>
          <li>
            <Label>[{i18n.INDIA}]</Label>{' '}
            <Link href="https://covidout.in/" target="_blank" wrap>
              https://covidout.in/
            </Link>
          </li>
          <li>
            <Label>[{i18n.GLOBAL}]</Label>{' '}
            <Link href="https://ourworldindata.org/coronavirus" target="_blank" wrap>
              Our World in Data
            </Link>
          </li>
          <li>
            <Label>[{i18n.GLOBAL}]</Label>{' '}
            <Link href="https://www.worldometers.info/coronavirus/" target="_blank" wrap>
              https://www.worldometers.info/coronavirus/
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TabMoreInfo;
