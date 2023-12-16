import {
  InlineStack,
  Text,
  Divider,
  Icon,
  Grid,
  Box,
  ButtonGroup,
  Button,
  Popover,
  ActionList,
} from "@shopify/polaris";
import React from "react";
import { useState, useCallback, useEffect } from "react";
import { TickSmallMinor, TickMinor } from "@shopify/polaris-icons";
import Setting from "../Setting/Setting";
import Plans from "../Plan/Plan";
import ConnectMarket from "../../Components/ConnectMarket/ConnectMarket";
function Installation() {
  //state for steps
  const [step, setstep] = useState(1);

  // function for going to next step by increasing step state by 1
  const nextStep = () => {
    setstep(step + 1);
  };

  // function for going to previous step by decreasing step state by 1
  const prevStep = () => {
    setstep(step - 1);
  };
  // pop over
  const [popoverActive, setPopoverActive] = useState(false);

  const togglePopoverActive = useCallback(
    () => setPopoverActive((popoverActive) => !popoverActive),
    []
  );

  const activator = (
    <Button variant="primary" size="large" onClick={togglePopoverActive}>
      Connect TikTok Shop
    </Button>
  );
  switch (step) {
    // case 1 to show stepOne form and passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
    case 1:
      return (
        <>
          <div className="marginTop50">
            <InlineStack align="center">
              <div className="text-circle step-active">
                <Text>
                  <Icon source={TickMinor}></Icon>
                </Text>
              </div>
              <div className="divider-wrapper">
                <hr className="divider-line"></hr>
              </div>
              <div className="text-circle">
                <Text>2</Text>
              </div>
              <div className="divider-wrapper">
                <hr className="divider-line"></hr>
              </div>
              <div className="text-circle">
                <Text>3</Text>
              </div>
              <div className="divider-wrapper">
                <hr className="divider-line"></hr>
              </div>
              <div className="text-circle">
                <Text>4</Text>
              </div>
            </InlineStack>
          </div>
          <Box as="div" className="marginTop50">
            <Grid columns={{ xs: 1, sm: 2 }}>
              <Grid.Cell columnSpan={{ sx: 6, sm: 6 }}>
                <div className="marginTop20">
                  <img src="src/Images/tiktok.webp" className="step-img"></img>
                </div>
              </Grid.Cell>
              <Grid.Cell columnSpan={{ sx: 6, sm: 6 }}>
                <div className="marginTop">
                  <Text variant="heading2xl">Connect TikTok Shop store</Text>
                  <Text variant="bodyLg" as="p">
                    Connect your TikTok Shop store to sync products over from
                    your eCommerce store.
                    <strong>
                      When asked for an authorization duration, we suggest
                      selecting 1 year.
                    </strong>
                  </Text>
                  <div className="margtop10"></div>
                  <Text variant="bodyLg" as="p">
                    Note: Your TikTok Shop store currency must match one of the
                    currencies you use on your Shopify store. Your currencies:
                    <strong> GBP, MXN.</strong>
                  </Text>
                  <div className="marginTop"></div>
                  <hr></hr>
                  <div className="marginTop"></div>
                  <Text>
                    TikTok Shop not available in your country/region yet?
                    Request early access
                  </Text>
                </div>
              </Grid.Cell>
            </Grid>
          </Box>
          <Box as="div" className="marginTop50 dis-Last">
              <Popover
                active={popoverActive}
                activator={activator}
                autofocusTarget="first-node"
                onClose={togglePopoverActive}
                preferredPosition={"above"}
              >
                <Box as="div" className="popover-box">
                  <Text variant="heading2xl" as="h3">
                    Select your TikTok Shop store region
                  </Text>
                  <Text>
                    This is just to ensure we meet regional data regulations.
                  </Text>
                  <ul className="listStyle connect-List">
                    <li className="connect-li">
                      <Button size="large" fullWidth onClick={nextStep}>
                        United States
                      </Button>
                    </li>
                    <li className="connect-li">
                      <Button size="large" fullWidth onClick={nextStep}>
                        Outside the US.
                      </Button>
                    </li>
                  </ul>
                </Box>
              </Popover>
          </Box>
        </>
      );
      case 2:
      return (
        <>
          <div className="marginTop50">
            <InlineStack align="center">
              <div className="text-circle step-active">
                <Text>
                  <Icon source={TickMinor}></Icon>
                </Text>
              </div>
              <div className="divider-wrapper">
                <hr className="divider-line "></hr>
              </div>
              <div className="text-circle step-active">
                <Text>
                  <Icon source={TickMinor}></Icon>
                </Text>
              </div>
              <div className="divider-wrapper">
                <hr className="divider-line"></hr>
              </div>
              <div className="text-circle">
                <Text>3</Text>
              </div>
              <div className="divider-wrapper">
                <hr className="divider-line"></hr>
              </div>
              <div className="text-circle">
                <Text>4</Text>
              </div>
            </InlineStack>
          </div>
          <ConnectMarket/>
          <div className="marginTop20"></div>
          <Box as="div" className=" dis-center">
            <ButtonGroup>
              <Button size="large" onClick={prevStep}>
                Previous
              </Button>
              <Button size="large" onClick={nextStep}> Next</Button>
            </ButtonGroup>
          </Box>

        </>
      );
    
      
    case 3:
      return (
        <>
          <div className="marginTop50">
            <InlineStack align="center">
              <div className="text-circle step-active">
                <Text>
                  <Icon source={TickMinor}></Icon>
                </Text>
              </div>
              <div className="divider-wrapper">
                <hr className="divider-line "></hr>
              </div>
              <div className="text-circle step-active">
                <Text>
                  <Icon source={TickMinor}></Icon>
                </Text>
              </div>
              <div className="divider-wrapper">
                <hr className="divider-line"></hr>
              </div>
              <div className="text-circle step-active">
                <Text>
                  <Icon source={TickMinor}></Icon>
                </Text>
              </div>
              <div className="divider-wrapper">
                <hr className="divider-line"></hr>
              </div>
              <div className="text-circle">
                <Text>4</Text>
              </div>
            </InlineStack>
          </div>
          <Setting/>
          <Box as="div" className=" dis-center">
            <ButtonGroup>
              <Button size="large" onClick={prevStep}>
                Previous
              </Button>
              <Button size="large" onClick={nextStep}> Next</Button>
            </ButtonGroup>
          </Box>

        </>
      );
    
      // default case to show nothing
    default:
      return (
        <>
           <div className="marginTop50">
            <InlineStack align="center">
              <div className="text-circle step-active">
                <Text>
                  <Icon source={TickMinor}></Icon>
                </Text>
              </div>
              <div className="divider-wrapper">
                <hr className="divider-line "></hr>
              </div>
              <div className="text-circle step-active">
                <Text>
                  <Icon source={TickMinor}></Icon>
                </Text>
              </div>
              <div className="divider-wrapper">
                <hr className="divider-line"></hr>
              </div>
              <div className="text-circle step-active">
                <Text>
                  <Icon source={TickMinor}></Icon>
                </Text>
              </div>
              <div className="divider-wrapper">
                <hr className="divider-line"></hr>
              </div>
              <div className="text-circle step-active">
                <Text>
                  <Icon source={TickMinor}></Icon>
                </Text>
              </div>
            </InlineStack>
          </div>
          <Plans/>
          <Box as="div" className="marginTop50 dis-center">
            <ButtonGroup>
              <Button size="large" onClick={prevStep}>
                Previous
              </Button>
              <Button size="large">Finished</Button>
            </ButtonGroup>
          </Box>

        </>
      )

  }
}
export default Installation;
