/** @format */

import {
  Page,
  Badge,
  DataTable,
  ButtonGroup,
  Popover,
  OptionList,
  Card,
  ActionList,
  InlineStack,
  Link,
  Text,
  Collapsible,
  Icon,
  TextField,
  Button,
  InlineGrid,
  Modal,
  FormLayout,
  Select,
  Tabs,
  Layout,
  ChoiceList,
  Box,
  Tooltip,
} from "@shopify/polaris";
import { Tag, Autocomplete } from "@shopify/polaris";
import React, { useState } from "react";
import { useCallback, useMemo } from "react";
import {
  TickMinor,
  MobileCancelMajor,
  StoreMajor,
  EditMajor,
  SimplifyMajor,
  DeleteMinor,
  MobileBackArrowMajor,
} from "@shopify/polaris-icons";
import {
  QuestionMarkInverseMajor,
  MobilePlusMajor,
} from "@shopify/polaris-icons";
import { ChevronDownMinor } from "@shopify/polaris-icons";

function PixelTable() {
  const [selectedOptions, setSelectedOptions] = useState(["rustic"]);
  const [inputValue, setInputValue] = useState("");
  const [active, setActive] = useState(false);
  const [show, setShow] = useState(false);
  const [value, setValue] = useState("Search Here");
  // facebook pixel name  value
  const [fbPixelName, SetfbPixelName] = useState("");

  const handleFbNameChange = useCallback((value) => SetfbPixelName(value), []);
  // facebook pixel name  Id
  const [fbPixelId, SetfbPixelId] = useState("");

  const handleFbIdChange = useCallback((value) => SetfbPixelId(value), []);
  // facebook Access Token
  const [TokenValue, setTokenValue] = useState("");
  const [SelectCollection, setSelectCollection] = useState("Entire Store");
  const [selected, setSelected] = useState("Entire Store");
  const [EventCode, setEventCode] = useState("");
  const [SourceValue, setSourceValue] = useState("");
  const [MediumValue, setMediumValue] = useState("");
  const [CampaignValue, setCampaignValue] = useState("");
  const deselectedOptions = useMemo(
    () => [
      { value: "rustic", label: "Rustic" },
      { value: "antique", label: "Antique" },
      { value: "vinyl", label: "Vinyl" },
      { value: "vintage", label: "Vintage" },
      { value: "refurbished", label: "Refurbished" },
    ],
    []
  );
  const [isFirstButtonActive, setIsFirstButtonActive] = useState(true);

  const handleFirstButtonClick = useCallback(() => {
    if (isFirstButtonActive) return;
    setIsFirstButtonActive(true);
  }, [isFirstButtonActive]);

  const handleSecondButtonClick = useCallback(() => {
    if (!isFirstButtonActive) return;
    setIsFirstButtonActive(false);
  }, [isFirstButtonActive]);
  const [options, setOptions] = useState(deselectedOptions);

  const updateText = useCallback(
    (value) => {
      setInputValue(value);

      if (value === "") {
        setOptions(deselectedOptions);
        return;
      }

      const filterRegex = new RegExp(value, "i");
      const resultOptions = deselectedOptions.filter((option) =>
        option.label.match(filterRegex)
      );

      setOptions(resultOptions);
    },
    [deselectedOptions]
  );

  const removeTag = useCallback(
    (tag) => () => {
      const options = [...selectedOptions];
      options.splice(options.indexOf(tag), 1);
      setSelectedOptions(options);
    },
    [selectedOptions]
  );

  const verticalContentMarkup =
    selectedOptions.length > 0 ? (
      <InlineStack spacing="extraTight" alignment="center">
        {selectedOptions.map((option) => {
          let tagLabel = "";
          tagLabel = option.replace("_", " ");
          tagLabel = titleCase(tagLabel);
          return (
            <Tag key={`option${option}`} onRemove={removeTag(option)}>
              {tagLabel}
            </Tag>
          );
        })}
      </InlineStack>
    ) : null;

  const textField = (
    <Autocomplete.TextField
      onChange={updateText}
      label={`Select ${selected}`}
      value={inputValue}
      placeholder="Vintage, cotton, summer"
      verticalContent={verticalContentMarkup}
      autoComplete="off"
    />
  );
  function titleCase(string) {
    return string
      .toLowerCase()
      .split(" ")
      .map((word) => word.replace(word[0], word[0].toUpperCase()))
      .join("");
  }
  // end

  const toggleModal = useCallback(() => setActive((active) => !active), []);
  const showForm = useCallback(() => setShow((show) => !show), []);

  // const activator = <Button onClick={toggleModal}>Open</Button>;

  const handleChange = useCallback((newValue) => setValue(newValue), []);

  const handleTokenValueChange = useCallback(
    (value) => setTokenValue(value),
    []
  );

  const [popoverActive, setPopoverActive] = useState(false);
  const ctmoption = () => {
    console.log(selected);
  };

  const togglePopoverActive = useCallback(
    () => setPopoverActive((popoverActive) => !popoverActive),
    []
  );
  const [canActive, setCanActive] = React.useState(null);

  const toggleActive = (id) => {
    setCanActive((activeId) => (activeId !== id ? id : null));
  };

  const activator = (
    <Button fullWidth onClick={togglePopoverActive}>
      Collections
    </Button>
  );
  const btnactivator = (
    <>
      {/* <Button fullWidth onClick={togglePopoverActive} variant="primary">
        Collections
      </Button> */}
      {/* <Button
        variant="primary"
        onClick={() => toggleActive("popover1")}
        icon={ChevronDownMinor}
        accessibilityLabel="Other save actions"
      /> */}
      <Button
        fullWidth
        onClick={() => toggleActive("popover1")}
        variant="primary">
        Change
      </Button>
    </>
    // <Button fullWidth onClick={togglePopoverActive} disclosure>
    //   Collections
    // </Button>
  );
  // select Area

  const handlechangesecond = useCallback((value) => {
    setSelected(value[0]);

    if (value[0] === "Collections") {
      togglePopoverActive();
      console.log("sdfjh");
    }
  }, []);

  const handleSelectChange = useCallback((value) => {
    setSelected(value);
    console.log(value);
    if (value === "Collections") {
      togglePopoverActive();
      console.log("sdfjh");
    }
  }, []);

  const optionsArea = [
    { label: "Entire Store", value: "Entire Store" },
    { label: "Collections", value: "Collections" },
    { label: "Tags", value: "Tags" },
  ];
  // facebook   Test Event Code

  const handleEventCodeChange = useCallback((value) => setEventCode(value), []);

  // UTMS parageters
  // Source

  const handleSourceValueChange = useCallback(
    (value) => setSourceValue(value),
    []
  );

  // Medium

  const handleMediumValueChange = useCallback(
    (value) => setMediumValue(value),
    []
  );
  // Campaign

  const handleCampaignValueChange = useCallback(
    (value) => setCampaignValue(value),
    []
  );

  const [textFieldInlineToken, setTextFieldInlineToken] = useState("");
  const [showInlineToken, setshowInlineToken] = useState(false);

  const handleTextFieldChangeInlineToken = useCallback(
    (value) => setTextFieldInlineToken(value),
    []
  );

  const rows = [
    [
      <ButtonGroup variant="segmented">
        <Button pressed={isFirstButtonActive} onClick={handleFirstButtonClick}>
          Off
        </Button>
        <Button
          pressed={!isFirstButtonActive}
          onClick={handleSecondButtonClick}>
          On
        </Button>
      </ButtonGroup>,
      "test",
      "798798",
      "enteir store",
      <div>
        {!showInlineToken ? (
          <Button
            onClick={() => setshowInlineToken(true)}
            ariaControls="basic-collapsible">
            Setup
          </Button>
        ) : (
          <div
            style={{
              position: "absolute",
              zIndex: 1,
              width: "45%",
            }}>
            <Card padding="100">
              <TextField
                fullWidth
                type="text"
                value={textFieldInlineToken}
                onChange={handleTextFieldChangeInlineToken}
                autoComplete="off"
                connectedRight={
                  <InlineStack gap="400">
                    <Button
                      onClick={() => setshowInlineToken(false)}
                      variant="plain">
                      Cancel
                    </Button>
                    <Button
                      onClick={() => setshowInlineToken(false)}
                      variant="primary">
                      save
                    </Button>
                  </InlineStack>
                }
              />
            </Card>
          </div>
        )}
      </div>,
      <Icon source={TickMinor} />,
      <InlineStack gap={200}>
        <Button onClick={() => setShow(true)} icon={EditMajor}>
          Edit
        </Button>
        <Button onClick={toggleModal} icon={DeleteMinor}>
          Delete
        </Button>
      </InlineStack>,
    ],
    [
      <ButtonGroup variant="segmented">
        <Button pressed={isFirstButtonActive} onClick={handleFirstButtonClick}>
          Off
        </Button>
        <Button
          pressed={!isFirstButtonActive}
          onClick={handleSecondButtonClick}>
          On
        </Button>
      </ButtonGroup>,
      "test",
      "798798",
      "enteir store",
      <Icon source={MobileCancelMajor} />,
      <Icon source={TickMinor} />,
      <InlineStack gap={200}>
        <Button onClick={() => setShow(true)} icon={EditMajor}>
          Edit
        </Button>
        <Button onClick={toggleModal} icon={DeleteMinor}>
          Delete
        </Button>
      </InlineStack>,
    ],
    [
      <ButtonGroup variant="segmented">
        <Button pressed={isFirstButtonActive} onClick={handleFirstButtonClick}>
          Off
        </Button>
        <Button
          pressed={!isFirstButtonActive}
          onClick={handleSecondButtonClick}>
          On
        </Button>
      </ButtonGroup>,
      "test",
      "798798",
      "enteir store",
      <Icon source={MobileCancelMajor} />,
      <Icon source={TickMinor} />,
      <InlineStack gap={200}>
        <Button onClick={() => setShow(true)} icon={EditMajor}>
          Edit
        </Button>
        <Button onClick={toggleModal} icon={DeleteMinor}>
          Delete
        </Button>
      </InlineStack>,
    ],
  ];

  return (
    <>
      {show == false ? (
        <>
          <div className="marginTop20">
            <InlineGrid columns={["twoThirds", "oneThird"]} gap={400}>
              <TextField
                label="Store name"
                labelHidden
                value={value}
                onChange={handleChange}
                autoComplete="off"
              />
              <Button variant="primary" onClick={showForm}>
                Add New Pixel
              </Button>
            </InlineGrid>
          </div>

          <Card>
            <DataTable
              columnContentTypes={["text", "text", "text", "text", "text"]}
              headings={[
                "Status",
                "Pixel Name",
                "	Pixel ID",
                "Target Area",
                "Server Side",
                "Test Events",
                "Actions",
              ]}
              rows={rows}
              pagination={{
                hasNext: true,
                onNext: () => {},
              }}
              footerContent={`Showing ${rows.length} of ${rows.length} results`}
            />
          </Card>
          <Modal
            // activator={activator}
            open={active}
            onClose={toggleModal}
            title="Delete"
            primaryAction={{
              destructive: true,
              content: "Delete",
              onAction: toggleModal,
            }}
            secondaryActions={[
              {
                content: "Cancel",
                onAction: toggleModal,
              },
            ]}>
            <Modal.Section>
              Are you sure you want to delete this pixel?
            </Modal.Section>
          </Modal>
        </>
      ) : (
        <Page
          backAction={{ content: "Settings", onAction: showForm }}
          title="Create Pixel">
          <Box>
            {/* <Card>
              <FormLayout>
                <FormLayout.Group>
                  <TextField
                    label="Pixel Name"
                    value={fbPixelName}
                    type="text"
                    onChange={handleFbNameChange}
                    selectTextOnFocus
                    autoComplete="off"
                  />

                  <TextField
                    label="Pixel ID"
                    value={fbPixelId}
                    onChange={handleFbIdChange}
                    selectTextOnFocus
                    autoComplete="off"
                  />
                </FormLayout.Group>
                <FormLayout.Group>
                  <Select
                    label="Target Area"
                    options={optionsArea}
                    onChange={handleSelectChange}
                    value={selected}
                  />
                </FormLayout.Group>
                <FormLayout.Group>
                  {selected === "Collections" || selected === "Tags" ? (
                    <>
                      <div className="hide-scroll">
                        <Autocomplete
                          allowMultiple
                          options={options}
                          selected={selectedOptions}
                          textField={textField}
                          onSelect={setSelectedOptions}
                          listTitle="Suggested Tags"
                        />
                      </div>
                    </>
                  ) : null}
                </FormLayout.Group>
                <FormLayout.Group>
                  <TextField
                    label="Access Token"
                    value={TokenValue}
                    type="text"
                    onChange={handleTokenValueChange}
                    selectTextOnFocus
                    autoComplete="off"
                  />
                  <TextField
                    label="Test Event Code"
                    value={EventCode}
                    onChange={handleEventCodeChange}
                    selectTextOnFocus
                    autoComplete="off"
                  />
                </FormLayout.Group>
              </FormLayout>
            </Card> */}
            <Layout>
              <Layout.Section>
                <div className="">
                  <div>
                    <Layout>
                      <Layout.AnnotatedSection
                        id="Merchant Details"
                        title="Merchant Details"
                        description="Following are Details of Connected Tiktok Shop.">
                        <Card sectioned>
                          <InlineGrid columns={{ xs: 2 }}>
                            <div className="dis-Last"></div>
                          </InlineGrid>
                          <div className="margtop10">
                            <InlineGrid columns={{ xs: 1 }} gap={200}>
                              <TextField
                                label={
                                  <InlineStack>
                                    <span>Pixel Name </span>
                                    <Tooltip
                                      content="This order has shipping labels."
                                      className="flex">
                                      <Icon
                                        source={QuestionMarkInverseMajor}
                                        tone="base"
                                      />
                                    </Tooltip>
                                  </InlineStack>
                                }
                                value={fbPixelName}
                                type="text"
                                onChange={handleFbNameChange}
                                selectTextOnFocus
                                autoComplete="off"
                              />

                              <TextField
                                label={
                                  <InlineStack>
                                    <span>Pixel ID</span>
                                    <Tooltip
                                      content="This order has shipping labels."
                                      className="flex">
                                      <Icon
                                        source={QuestionMarkInverseMajor}
                                        tone="base"
                                      />
                                    </Tooltip>
                                  </InlineStack>
                                }
                                value={fbPixelId}
                                onChange={handleFbIdChange}
                                selectTextOnFocus
                                autoComplete="off"
                              />
                              <Select
                                label={
                                  <InlineStack>
                                    <span>Target Area</span>
                                    <Tooltip
                                      content="This order has shipping labels."
                                      className="flex">
                                      <Icon
                                        source={QuestionMarkInverseMajor}
                                        tone="base"
                                      />
                                    </Tooltip>
                                  </InlineStack>
                                }
                                options={optionsArea}
                                onChange={handleSelectChange}
                                value={selected}
                              />
                              {selected === "Collections" ||
                              selected === "Tags" ? (
                                <>
                                  <div className="hide-scroll">
                                    <Autocomplete
                                      allowMultiple
                                      options={options}
                                      selected={selectedOptions}
                                      textField={textField}
                                      onSelect={setSelectedOptions}
                                      listTitle="Suggested Tags"
                                    />
                                  </div>
                                </>
                              ) : null}
                            </InlineGrid>
                          </div>
                        </Card>
                      </Layout.AnnotatedSection>
                    </Layout>
                  </div>
                  <div className="marginTop20">
                    <Layout>
                      <Layout.AnnotatedSection
                        id="Merchant Details"
                        title="Merchant Details"
                        description="Following are Details of Connected Tiktok Shop.">
                        <Card sectioned>
                          <InlineGrid columns={{ xs: 2 }}>
                            <div className="dis-Last"></div>
                          </InlineGrid>
                          <div className="margtop10">
                            <InlineGrid columns={{ xs: 1 }} gap={200}>
                              <TextField
                                label={
                                  <InlineStack>
                                    <span>Access Token</span>
                                    <Tooltip
                                      content="This order has shipping labels."
                                      className="flex">
                                      <Icon
                                        source={QuestionMarkInverseMajor}
                                        tone="base"
                                      />
                                    </Tooltip>
                                  </InlineStack>
                                }
                                value={TokenValue}
                                type="text"
                                onChange={handleTokenValueChange}
                                selectTextOnFocus
                                autoComplete="off"
                              />
                              <TextField
                                label={
                                  <InlineStack>
                                    <span>Test Event Code</span>
                                    <Tooltip
                                      content="This order has shipping labels."
                                      className="flex">
                                      <Icon
                                        source={QuestionMarkInverseMajor}
                                        tone="base"
                                      />
                                    </Tooltip>
                                  </InlineStack>
                                }
                                value={EventCode}
                                onChange={handleEventCodeChange}
                                selectTextOnFocus
                                autoComplete="off"
                              />
                            </InlineGrid>
                          </div>
                        </Card>
                      </Layout.AnnotatedSection>
                    </Layout>
                  </div>
                </div>
              </Layout.Section>
            </Layout>

            <Box as="div" className=" dis-center">
              <div className="dis-center">
                <Button variant="primary" onClick={showForm}>
                  {" "}
                  Add Pixel
                </Button>
              </div>
            </Box>
          </Box>
        </Page>
      )}
    </>
  );
}
export default PixelTable;
