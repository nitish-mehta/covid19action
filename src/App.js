import React, { useReducer, useEffect } from 'react';
import useReactRouter from 'use-react-router';

import { Button } from '@ui5/webcomponents-react/lib/Button';
import { ButtonDesign } from '@ui5/webcomponents-react/lib/ButtonDesign';
import { Dialog } from '@ui5/webcomponents-react/lib/Dialog';
import { Label } from '@ui5/webcomponents-react/lib/Label';
import { Link } from '@ui5/webcomponents-react/lib/Link';
import { TabContainer } from '@ui5/webcomponents-react/lib/TabContainer';
import { Tab } from '@ui5/webcomponents-react/lib/Tab';
import { ActionSheet } from '@ui5/webcomponents-react/lib/ActionSheet';
import { FlexBox } from '@ui5/webcomponents-react/lib/FlexBox';

import TabEligibilityChecker from './pages/TabEligibilityChecker';
import TabIndiaInfo from './pages/TabIndiaInfo';
import TabMoreInfo from './pages/TabMoreInfo';

import { changeCurrentLocale, getValidLocale } from './i18n/loadText.js';

import {
  FacebookShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  TwitterShareButton,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
  WhatsappIcon,
} from 'react-share';
import './App.css';
import { routes, mapTabToRoute } from './routes';

const initialState = {
  isHelpDialogOpen: false,
  isLanguageDialogOpen: false,
  i18n: changeCurrentLocale('en'),
};

function reducer(state, action) {
  switch (action.type) {
    case 'i18nChange':
      return { ...state, i18n: action.payload };
    case 'openDialog':
      return { ...state, isHelpDialogOpen: true };
    case 'closeDialog':
      return { ...state, isHelpDialogOpen: false };
    case 'openLanguageDialog':
      return { ...state, isLanguageDialogOpen: true };
    case 'closeLanguageDialog':
      return { ...state, isLanguageDialogOpen: false };
    default:
      throw new Error();
  }
}

function App() {
  const {
    history,
    location: { pathname },
  } = useReactRouter();

  useEffect(() => {
    if (!routes.includes(pathname)) {
      history.replace(routes[0]);
    }
    // eslint-disable-next-line
  }, []);

  const [state, dispatch] = useReducer(reducer, initialState);
  const i18n = state.i18n;

  const aRelevantLanguages = getValidLocale();

  const handleTabSelect = event => {
    history.push(mapTabToRoute(event.parameters.item.slot));
  };

  return (
    <div className="App">
      <div className="Covid19App">
        <div className="headerShellBar">
          <div className="shellBarLeft" />
          <div className="shellBarCenter">{i18n.HOME_TITLE}</div>
          <div className="shellBarRight">
            <Button
              design={ButtonDesign.Transparent}
              icon="world"
              className="shellBarBtn"
              onClick={() => dispatch({ type: 'openLanguageDialog' })}
            ></Button>
            <Button
              design={ButtonDesign.Transparent}
              icon="sys-help"
              className="shellBarIconBtn"
              onClick={() => dispatch({ type: 'openDialog' })}
            ></Button>
            <ActionSheet
              openBy={
                <Button
                  design={ButtonDesign.Transparent}
                  icon="share"
                  className="shellBarIconBtn"
                />
              }
              placement={'Bottom'}
            >
              <FacebookShareButton
                url="https://myswastha.in/"
                quote={i18n.SHARING_TITLE}
                hashtag="#MySwastha #FlattenTheCurve"
              >
                <FacebookIcon size={32} round={true} />
              </FacebookShareButton>
              <WhatsappShareButton url="https://myswastha.in/" title={i18n.SHARING_TITLE}>
                <WhatsappIcon size={32} round={true} />
              </WhatsappShareButton>
              <TwitterShareButton
                url="https://myswastha.in/"
                title={i18n.SHARING_TITLE}
                hashtags={['FlattenTheCurve', 'MySwastha']}
                via={['nitish_mehta']}
              >
                <TwitterIcon size={32} round={true} />
              </TwitterShareButton>
              <LinkedinShareButton url="https://myswastha.in/" title={i18n.SHARING_TITLE}>
                <LinkedinIcon size={32} round={true} />
              </LinkedinShareButton>
            </ActionSheet>
          </div>
        </div>

        <TabContainer className="c19IconTab" showOverflow onItemSelect={handleTabSelect}>
          <Tab text={i18n.UNWELL} icon="stethoscope" selected={pathname === routes[0]}>
            <TabEligibilityChecker i18n={i18n} />
          </Tab>
          <Tab text={i18n.INDIA} icon="notes" selected={pathname === routes[1]}>
            <TabIndiaInfo i18n={i18n} />
          </Tab>
          <Tab text={''} icon="business-objects-experience" selected={pathname === routes[2]}>
            <TabMoreInfo i18n={i18n} />
          </Tab>
        </TabContainer>

        <Dialog
          headerText={i18n.ABOUT_THIS_WEBSITE}
          stretch={false}
          open={state.isHelpDialogOpen}
          footer={
            <Button className="dialogFooterBtn" onClick={() => dispatch({ type: 'closeDialog' })}>
              {i18n.CLOSE}
            </Button>
          }
        >
          <div style={{ width: '300px', height: '400px' }}>
            <Label wrap className="disclaimerText">
              {i18n.WEBSITE_DISCLAIMER}
            </Label>
            <br />
            <br />
            <Label wrap>{i18n.WEBSITE_DESCRIPTION_1}</Label>
            <br />
            <br />
            <Label wrap>
              {i18n.WEBSITE_DESCRIPTION_2}{' '}
              <Link href="https://github.com/nitish-mehta/covid19action" target="_blank" wrap>
                GitHub{' '}
              </Link>
              {i18n.WEBSITE_DESCRIPTION_3}
            </Label>
            <br />
            <Label wrap>
              {i18n.WEBSITE_DESCRIPTION_4}{' '}
              <Link href="https://twitter.com/nitish_mehta" target="_blank" wrap>
                Twitter
              </Link>{' '}
              {i18n.AND}{' '}
              <Link href="https://www.linkedin.com/in/nitishmehta08/" target="_blank" wrap>
                LinkedIn.
              </Link>{' '}
            </Label>
            <br />
            <br />
            <Label wrap>{i18n.WEBSITE_DESCRIPTION_5}</Label>
            <br />
            <br />
            <FlexBox
              justifyContent={'SpaceBetween'}
              alignItems={'Stretch'}
              direction={'Row'}
              displayInline={false}
              fitContainer
            >
              <FacebookShareButton
                url="https://myswastha.in/"
                quote={i18n.SHARING_TITLE}
                hashtag="#MySwastha #FlattenTheCurve"
              >
                <FacebookIcon size={32} round={true} />
              </FacebookShareButton>
              <WhatsappShareButton url="https://myswastha.in/" title={i18n.SHARING_TITLE}>
                <WhatsappIcon size={32} round={true} />
              </WhatsappShareButton>
              <TwitterShareButton
                url="https://myswastha.in/"
                title={i18n.SHARING_TITLE}
                hashtags={['FlattenTheCurve', 'MySwastha']}
                via={['nitish_mehta']}
              >
                <TwitterIcon size={32} round={true} />
              </TwitterShareButton>{' '}
              <LinkedinShareButton url="https://myswastha.in/" title={i18n.SHARING_TITLE}>
                <LinkedinIcon size={32} round={true} />
              </LinkedinShareButton>
            </FlexBox>
          </div>
        </Dialog>

        <Dialog
          headerText={'Change Language'}
          stretch={false}
          open={state.isLanguageDialogOpen}
          footer={
            <Button
              className="dialogFooterBtn"
              onClick={() => dispatch({ type: 'closeLanguageDialog' })}
            >
              {i18n.CLOSE}
            </Button>
          }
        >
          <div style={{ width: '250px', height: '300px' }}>
            <Link
              href="
                  https://github.com/nitish-mehta/covid19action#how-can-you-help"
              target="_blank"
              wrap
            >
              (Help Improve Translations)
            </Link>{' '}
            <ul>
              {aRelevantLanguages.map(currentVal => {
                return (
                  <li key={currentVal.code}>
                    <Button
                      design={ButtonDesign.Transparent}
                      onClick={() => {
                        dispatch({ type: 'closeLanguageDialog' });
                        dispatch({
                          type: 'i18nChange',
                          payload: changeCurrentLocale(currentVal.code),
                        });
                      }}
                    >
                      {currentVal.displayText}
                    </Button>
                  </li>
                );
              })}
            </ul>
          </div>
        </Dialog>
      </div>
    </div>
  );
}

export default App;
