/** @format */

import {
  Divider,
  IndexTable,
  Card,
  useIndexResourceState,
  Text,
  useBreakpoints,
  TextField,
  Button,
  InlineGrid,
  EmptyState,
  ButtonGroup,
} from "@shopify/polaris";
import { SearchMinor } from "@shopify/polaris-icons";
import React, { useCallback, useState } from "react";

function IntrestFinder() {
  // Search value data
  const [value, setValue] = useState("Search Here");

  const handleChange = useCallback((newValue) => setValue(newValue), []);
  //   Intrest Finder Button
  const [isFirstButtonActive, setIsFirstButtonActive] = useState(true);

  const handleFirstButtonClick = useCallback(() => {
    if (isFirstButtonActive) return;
    setIsFirstButtonActive(true);
  }, [isFirstButtonActive]);

  const handleSecondButtonClick = useCallback(() => {
    if (!isFirstButtonActive) return;
    setIsFirstButtonActive(false);
  }, [isFirstButtonActive]);

  //   table
  // const orders =[];
  const orders = [
    {
      id: "1020",
      Name: "#1020",
      AudienceSize: "Jul 20 at 4:34pm",
      Topic: "Jaydon Stanton",
    },
    {
      id: "1019",
      Name: "#1019",
      AudienceSize: "Jul 20 at 3:46pm",
      Topic: "Ruben Westerfelt",
    },
    {
      id: "1018",
      Name: "#1018",
      AudienceSize: "Jul 20 at 3.44pm",
      Topic: "Leo Carder",
    },
  ];
  const resourceName = {
    singular: "order",
    plural: "orders",
  };

  const { selectedResources, allResourcesSelected, handleSelectionChange } =
    useIndexResourceState(orders);

  const rowMarkup = orders.map(({ id, Name, AudienceSize, Topic }, index) => (
    <IndexTable.Row
      id={id}
      key={id}
      selected={selectedResources.includes(id)}
      position={index}>
      <IndexTable.Cell>
        <Text variant="bodyMd" fontWeight="bold" as="span">
          {Name}
        </Text>
      </IndexTable.Cell>
      <IndexTable.Cell>{AudienceSize}</IndexTable.Cell>
      <IndexTable.Cell>{Topic}</IndexTable.Cell>
    </IndexTable.Row>
  ));

  const promotedBulkActions = [
    {
      content: "Create shipping labels",
      onAction: () => console.log("Todo: implement bulk edit"),
    },
  ];
  const bulkActions = [
    {
      content: "Add tags",
      onAction: () => console.log("Todo: implement bulk add tags"),
    },
    {
      content: "Remove tags",
      onAction: () => console.log("Todo: implement bulk remove tags"),
    },
    {
      content: "Delete orders",
      onAction: () => console.log("Todo: implement bulk delete"),
    },
  ];
  return (
    <div className="marginTop20">
      <div className="marginTop20">
        <InlineGrid columns={["twoThirds", "oneThird"]} gap={400}>
          <TextField
            label="Store name"
            labelHidden
            value={value}
            onChange={handleChange}
            autoComplete="off"
          />
          <Button icon={SearchMinor}>Search </Button>
        </InlineGrid>
      </div>
      <Divider />
      <Card>
        <div className="marginTop20">
          <ButtonGroup variant="segmented">
            <Button
              pressed={isFirstButtonActive}
              onClick={handleFirstButtonClick}>
              Interest
            </Button>
            <Button
              pressed={!isFirstButtonActive}
              onClick={handleSecondButtonClick}>
              Interest Suggestions
            </Button>
          </ButtonGroup>
        </div>
        <Divider />

        <div className="marginTop20">
          {isFirstButtonActive ? (
            <Card>
              {selectedResources.length > 0 ? (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "10px",
                  }}>
                  <>
                    <div>Selected {selectedResources.length} Items</div>
                    <div style={{}}>
                      {" "}
                      <ButtonGroup variant="segmented">
                        <Button>Copy</Button>
                        <Button>Download</Button>
                      </ButtonGroup>
                    </div>
                  </>
                </div>
              ) : null}
              <IndexTable
                resourceName={resourceName}
                itemCount={orders.length}
                selectedItemsCount={
                  allResourcesSelected ? "All" : selectedResources.length
                }
                onSelectionChange={handleSelectionChange}
                headings={[
                  { title: "Name" },
                  { title: "Audience Size" },
                  { title: "Topic" },
                ]}
                emptyState={[
                  <EmptyState
                    heading="No names found"
                    image="src/Images/download.svg"
                    fullWidth>
                    <p>Try changing the filters or search term</p>
                  </EmptyState>,
                ]}>
                {rowMarkup}
              </IndexTable>
            </Card>
          ) : (
            <Card>
              {selectedResources.length > 0 ? (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "10px",
                  }}>
                  <>
                    <div>Selected {selectedResources.length} Items</div>
                    <div style={{}}>
                      {" "}
                      <ButtonGroup variant="segmented">
                        <Button>Copy</Button>
                        <Button>Download</Button>
                      </ButtonGroup>
                    </div>
                  </>
                </div>
              ) : null}
              <IndexTable
                resourceName={resourceName}
                itemCount={orders.length}
                selectedItemsCount={
                  allResourcesSelected ? "All" : selectedResources.length
                }
                onSelectionChange={handleSelectionChange}
                headings={[
                  { title: "Name" },
                  { title: "Audience Size" },
                  { title: "Topic" },
                ]}
                emptyState={[
                  <EmptyState
                    heading="No names found"
                    image="src/Images/download.svg"
                    fullWidth>
                    <p>Try changing the filters or search term</p>
                  </EmptyState>,
                ]}>
                {rowMarkup}
              </IndexTable>
            </Card>
          )}
        </div>
      </Card>
    </div>
  );
}
export default IntrestFinder;
