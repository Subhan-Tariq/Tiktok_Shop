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
  Icon,
  TextField,
  Button,
  InlineGrid,
  Modal,
  FormLayout,
  Select,
} from "@shopify/polaris";
import React from "react";
import {
  TickMinor,
  MobileCancelMajor,
  EditMajor,
  DeleteMinor,
  MobileBackArrowMajor,
} from "@shopify/polaris-icons";
import { ChevronDownMinor } from "@shopify/polaris-icons";

import { useState, useCallback } from "react";

function PixelTable() {
  const [active, setActive] = useState(false);

  const toggleModal = useCallback(() => setActive((active) => !active), []);
  const [show, setShow] = useState(false);
  const showForm = useCallback(() => setShow((show) => !show), []);

  // const activator = <Button onClick={toggleModal}>Open</Button>;
  const [value, setValue] = useState("Search Here");

  const handleChange = useCallback((newValue) => setValue(newValue), []);
  const rows = [
    [
      <Badge>Active</Badge>,
      "test",
      "798798",
      "enteir store",
      <Icon source={MobileCancelMajor} />,
      <Icon source={TickMinor} />,
      <InlineStack gap={200}>
        <Link url="/" passHref removeUnderline={true}>
          <Button icon={EditMajor}>Edit</Button>
        </Link>
        <Button onClick={toggleModal} icon={DeleteMinor}>
          Delete
        </Button>
      </InlineStack>,
    ],
    [
      <Badge>Active</Badge>,
      "test",
      "798798",
      "enteir store",
      <Icon source={MobileCancelMajor} />,
      <Icon source={TickMinor} />,
      <InlineStack gap={200}>
        <Link url="/" passHref removeUnderline={true}>
          <Button icon={EditMajor}>Edit</Button>
        </Link>
        <Button onClick={toggleModal} icon={DeleteMinor}>
          Delete
        </Button>
      </InlineStack>,
    ],
    [
      <Badge>Active</Badge>,
      "test",
      "798798",
      "enteir store",
      <Icon source={MobileCancelMajor} />,
      <Icon source={TickMinor} />,
      <InlineStack gap={200}>
        <Link url="/" passHref removeUnderline={true}>
          <Button icon={EditMajor}>Edit</Button>
        </Link>
        <Button onClick={toggleModal} icon={DeleteMinor}>
          Delete
        </Button>
      </InlineStack>,
    ],
  ];
  // facebook pixel name  value
  const [fbPixelName, SetfbPixelName] = useState("");

  const handleFbNameChange = useCallback((value) => SetfbPixelName(value), []);
  // facebook pixel name  Id
  const [fbPixelId, SetfbPixelId] = useState("");

  const handleFbIdChange = useCallback((value) => SetfbPixelId(value), []);
  // facebook Access Token
  const [TokenValue, setTokenValue] = useState("");

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

  const [SelectCollection, setSelectCollection] = useState("Entire Store");
  const [selected, setSelected] = useState("Entire Store");

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
  const [EventCode, setEventCode] = useState("");

  const handleEventCodeChange = useCallback((value) => setEventCode(value), []);

  // UTMS parageters
  // Source
  const [SourceValue, setSourceValue] = useState("");
  const handleSourceValueChange = useCallback(
    (value) => setSourceValue(value),
    []
  );

  // Medium
  const [MediumValue, setMediumValue] = useState("");
  const handleMediumValueChange = useCallback(
    (value) => setMediumValue(value),
    []
  );
  // Campaign
  const [CampaignValue, setCampaignValue] = useState("");
  const handleCampaignValueChange = useCallback(
    (value) => setCampaignValue(value),
    []
  );

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
        <div className="marginTop20">
          <div className="dis-last">
            <Button onClick={showForm} icon={MobileBackArrowMajor}>
              Back
            </Button>
          </div>
          <Card>
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
                {selected === "Collections" ? (
                  <>
                    <div>
                      <Text variant="bodyMd" as="p">
                        Select Collections
                      </Text>
                    </div>

                    <div style={{}}>
                      <div className="pixelchange" style={{ display: "flex" }}>
                        <Popover
                          fullWidth
                          active={popoverActive}
                          activator={activator}
                          onClose={togglePopoverActive}>
                          <OptionList
                            title="Inventory Location"
                            onChange={setSelectCollection}
                            options={[
                              {
                                value: "byward_market",
                                label: "Byward Market",
                              },
                              { value: "centretown", label: "Centretown" },
                              {
                                value: "hintonburg",
                                label: "Hintonburg",
                              },
                              { value: "westboro", label: "Westboro" },
                              { value: "downtown", label: "Downtown" },
                            ]}
                            selected={SelectCollection}
                            allowMultiple
                          />
                        </Popover>
                        <Popover
                          active={canActive === "popover1"}
                          preferredAlignment="right"
                          activator={btnactivator}
                          autofocusTarget="first-node"
                          onClose={() => toggleActive("popover1")}>
                          {/* <ActionList
                            actionRole="menuitem"
                            items={[{ content: "Save as draft" }]}
                          /> */}
                          <OptionList
                            title="Target Area"
                            onChange={handlechangesecond}
                            options={optionsArea}
                            selected={selected}
                          />
                        </Popover>
                      </div>
                    </div>
                  </>
                ) : (
                  <Select
                    label="Target Area"
                    options={optionsArea}
                    onChange={handleSelectChange}
                    value={selected}
                  />
                )}
              </FormLayout.Group>
              <FormLayout.Group>
                <TextField
                  label="Pixel ID"
                  value={fbPixelId}
                  onChange={handleFbIdChange}
                  selectTextOnFocus
                  autoComplete="off"
                />

                <TextField
                  label="Access Token"
                  value={TokenValue}
                  type="text"
                  onChange={handleTokenValueChange}
                  selectTextOnFocus
                  autoComplete="off"
                />
              </FormLayout.Group>
              <TextField
                label="Test Event Code"
                value={EventCode}
                onChange={handleEventCodeChange}
                selectTextOnFocus
                autoComplete="off"
              />
              <Text>UTM Parameters</Text>
              <FormLayout.Group condensed>
                <TextField
                  label="UTM Source"
                  labelHidden
                  placeholder="Source"
                  value={SourceValue}
                  onChange={handleSourceValueChange}
                  autoComplete="off"
                />
                <TextField
                  label="UTM Medium"
                  labelHidden
                  placeholder="Medium"
                  value={MediumValue}
                  onChange={handleMediumValueChange}
                  autoComplete="off"
                />
                <TextField
                  label="UTM Campaign"
                  labelHidden
                  placeholder="Campaign"
                  value={CampaignValue}
                  onChange={handleCampaignValueChange}
                  autoComplete="off"
                />
              </FormLayout.Group>
              <div className="dis-center">
                <Button onClick={showForm}> Save</Button>
              </div>
            </FormLayout>
          </Card>
        </div>
      )}
    </>
  );
}
export default PixelTable;
