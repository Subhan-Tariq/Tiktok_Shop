import { Divider, IndexTable,Card,useIndexResourceState, Text,TextField,Button, InlineGrid ,EmptyState,ButtonGroup} from "@shopify/polaris";
import {
    SearchMinor
  } from '@shopify/polaris-icons';
import React,{useCallback,useState} from "react";

function IntrestFinder(){

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
 const orders=[
    {
      id: '1020',
      Name: '#1020',
      AudienceSize: 'Jul 20 at 4:34pm',
      Topic: 'Jaydon Stanton',
    },
    {
      id: '1019',
      Name: '#1019',
      AudienceSize: 'Jul 20 at 3:46pm',
      Topic: 'Ruben Westerfelt',
    },
    {
      id: '1018',
      Name: '#1018',
      AudienceSize: 'Jul 20 at 3.44pm',
      Topic: 'Leo Carder',
    },
  ];
  const resourceName = {
    singular: 'order',
    plural: 'orders',
  };

  const {selectedResources, allResourcesSelected, handleSelectionChange} =
    useIndexResourceState(orders);

  const rowMarkup = orders.map(
    (
      {id, Name, AudienceSize, Topic},
      index,
    ) => (
      <IndexTable.Row
        id={id}
        key={id}
        selected={selectedResources.includes(id)}
        position={index}
      >
        <IndexTable.Cell>
          <Text variant="bodyMd" fontWeight="bold" as="span">
            {Name}
          </Text>
        </IndexTable.Cell>
        <IndexTable.Cell>{AudienceSize}</IndexTable.Cell>
        <IndexTable.Cell>{Topic}</IndexTable.Cell>
      </IndexTable.Row>
    ),
  );
return(
    <>
        <div className="marginTop20">   
      <InlineGrid columns={['twoThirds','oneThird']} gap={400}>
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
        <Divider/>
        <div className="marginTop20">
        <ButtonGroup variant="segmented">
      <Button pressed={isFirstButtonActive} onClick={handleFirstButtonClick}>
      Interest
      </Button>
      <Button pressed={!isFirstButtonActive} onClick={handleSecondButtonClick}>
      Interest Suggestions
      </Button>
    </ButtonGroup>
        </div>
        {isFirstButtonActive? (
                <div className="marginTop20">
                <Card>
              <IndexTable
                resourceName={resourceName}
                itemCount={orders.length}
                selectedItemsCount={
                  allResourcesSelected ? 'All' : selectedResources.length
                }
                onSelectionChange={handleSelectionChange}
                headings={[
                  {title: 'Name'},
                  {title: 'Audience Size'},
                  {title: 'Topic'},
                ]}
                emptyState={
                    [
                        <EmptyState
                        heading="No names found"
                        image="src/Images/download.svg"
                        fullWidth
                      >
                         <p>Try changing the filters or search term</p>
                      </EmptyState>
                    ]
                }
              >
                {rowMarkup}
              </IndexTable>
            </Card>
                </div>
        ):(
            <div className="marginTop20">
        <Card>
      <IndexTable
        resourceName={resourceName}
        itemCount={orders.length}
        selectedItemsCount={
          allResourcesSelected ? 'All' : selectedResources.length
        }
        onSelectionChange={handleSelectionChange}
        headings={[
          {title: 'Name'},
          {title: 'Audience Size'},
          {title: 'Topic'},
        ]}
        emptyState={
            [
                <EmptyState
                heading="No names found"
                image="src/Images/download.svg"
                fullWidth
              >
                 <p>Try changing the filters or search term</p>
              </EmptyState>
            ]
        }
      >
        {rowMarkup}
      </IndexTable>
    </Card>
        </div>
        )}
        
    </>
)
}
export default IntrestFinder;