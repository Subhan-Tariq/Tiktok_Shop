import {
  Page,
  Badge,
  DataTable,
  Card,
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

import { useState, useCallback } from "react";

function PixelTable() {
  const [active, setActive] = useState(false);

  const toggleModal = useCallback(() => setActive((active) => !active), []);
  const [show,setShow] = useState(false);
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

  const handleFbNameChange = useCallback(
    (value) => SetfbPixelName(value),
    []
  );
   // facebook pixel name  Id
   const [fbPixelId, SetfbPixelId] = useState("");

   const handleFbIdChange = useCallback(
     (value) => SetfbPixelId(value),
     []
   );
    // facebook Access Token 
    const [TokenValue, setTokenValue] = useState("");

    const handleTokenValueChange = useCallback(
      (value) => setTokenValue(value),
      []
    );

  // select Area 
  const [selected, setSelected] = useState("Entire Store");

  const handleSelectChange = useCallback((value) => setSelected(value), []);

  const optionsArea = [
    { label: "Entire Store", value: "Entire Store" },
    { label: "Collections", value: "Collections" },
    { label: "Tags", value: "Tags" },
  ];
  // facebook   Test Event Code
  const [EventCode, setEventCode] = useState("");

  const handleEventCodeChange = useCallback(
    (value) => setEventCode(value),
    []
  );

  // UTMS parageters
  // Source
  const [SourceValue, setSourceValue] = useState('');
  const handleSourceValueChange = useCallback(
    (value) => setSourceValue(value),
    []
  );

   // Medium
   const [MediumValue, setMediumValue] = useState('');
   const handleMediumValueChange = useCallback(
     (value) => setMediumValue(value),
     []
   );
    // Campaign
    const [CampaignValue, setCampaignValue] = useState('');
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
         <Button variant="primary" onClick={showForm}>Add New Pixel</Button>
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
        ]}
      >
        <Modal.Section>
          Are you sure you want to delete this pixel?
        </Modal.Section>
      </Modal>
      </>
    ):(
    
      <div className="marginTop20">
        <div className="dis-last">
        <Button onClick={showForm} icon={MobileBackArrowMajor} variant="tertiary">Back</Button>
        </div>
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
            type="number"
            onChange={handleSelectChange}
            value={selected}
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
      </div>
    )}
    
    </>
  );
}
export default PixelTable;
