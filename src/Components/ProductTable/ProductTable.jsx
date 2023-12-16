import {
  TextField,
  IndexTable,
  LegacyCard,
  IndexFilters,
  useSetIndexFiltersMode,
  useIndexResourceState,
  Text,
  Filters,
  ChoiceList,
  Box,
  Tabs,
  Button,
  Grid,
  ButtonGroup,
  Select,
  Icon,
  InlineStack,
  Tooltip,
} from "@shopify/polaris";
import { useState, useCallback, useEffect, createContext } from "react";
import {
  RefreshMinor,
  EditMinor,
  TiktokMinor,
  SearchMajor,
  FilterMajor,
} from "@shopify/polaris-icons";
import CustomizedTable from "../CustomizedTable/CustomizedTable";
const ParentContext = createContext();
function ProductTable({ orders }) {
  // Filter start

  const [availability, setAvailability] = useState([]);
  const [productType, setProductType] = useState([]);
  const [taggedWith, setTaggedWith] = useState("");
  const [queryValue, setQueryValue] = useState("");

  const handleAvailabilityChange = useCallback(
    (value) => setAvailability(value),
    []
  );
  const handleProductTypeChange = useCallback(
    (value) => setProductType(value),
    []
  );
  const handleTaggedWithChange = useCallback(
    (value) => setTaggedWith(value),
    []
  );
  const handleFiltersQueryChange = useCallback(
    (value) => setQueryValue(value),
    []
  );
  const handleAvailabilityRemove = useCallback(() => setAvailability([]), []);
  const handleProductTypeRemove = useCallback(() => setProductType([]), []);
  const handleTaggedWithRemove = useCallback(() => setTaggedWith(""), []);
  const handleQueryValueRemove = useCallback(() => setQueryValue(""), []);
  const handleFiltersClearAll = useCallback(() => {
    handleAvailabilityRemove();
    handleProductTypeRemove();
    handleTaggedWithRemove();
    handleQueryValueRemove();
  }, [
    handleAvailabilityRemove,
    handleQueryValueRemove,
    handleProductTypeRemove,
    handleTaggedWithRemove,
  ]);

  const filters = [
    {
      key: "availability",
      label: "Availability",
      filter: (
        <ChoiceList
          title="Availability"
          titleHidden
          choices={[
            { label: "Online Store", value: "Online Store" },
            { label: "Point of Sale", value: "Point of Sale" },
            { label: "Buy Button", value: "Buy Button" },
          ]}
          selected={availability || []}
          onChange={handleAvailabilityChange}
          allowMultiple
        />
      ),
      shortcut: true,
    },
    {
      key: "productType",
      label: "Product type",
      filter: (
        <ChoiceList
          title="Product type"
          titleHidden
          choices={[
            { label: "T-Shirt", value: "T-Shirt" },
            { label: "Accessory", value: "Accessory" },
            { label: "Gift card", value: "Gift card" },
          ]}
          selected={productType || []}
          onChange={handleProductTypeChange}
          allowMultiple
        />
      ),
    },
    {
      key: "taggedWith",
      label: "Tagged with",
      filter: (
        <TextField
          label="Tagged with"
          value={taggedWith}
          onChange={handleTaggedWithChange}
          autoComplete="off"
          labelHidden
        />
      ),
    },
  ];

  const appliedFilters = [];
  if (!isEmpty(availability)) {
    const key = "availability";
    appliedFilters.push({
      key,
      label: disambiguateLabel(key, availability),
      onRemove: handleAvailabilityRemove,
    });
  }
  if (!isEmpty(productType)) {
    const key = "productType";
    appliedFilters.push({
      key,
      label: disambiguateLabel(key, productType),
      onRemove: handleProductTypeRemove,
    });
  }
  if (!isEmpty(taggedWith)) {
    const key = "taggedWith";
    appliedFilters.push({
      key,
      label: `Tagged with ${taggedWith}`,
      onRemove: handleTaggedWithRemove,
    });
  }

  // Filter End
  // Floating button
  const promotedBulkActions = [
    {
      content: "Sync to Tiktok ",
      onAction: () => console.log("Todo: implement bulk edit"),
    },
  ];
  const [items, setItems] = useState([
    { id: "1", title: "ProImage", value: "Product Image", checked: true },
    { id: "2", title: "ProName", value: "Product Name", checked: true },
    { id: "3", title: "ProType", value: "Product Type", checked: true },
    { id: "4", title: "Vendor", value: "Vendor", checked: true },
    { id: "5", title: "Variations", value: "Variations", checked: true },
    { id: "6", title: "ShopifyStatus", value: "Shopify Status", checked: true },
    { id: "7", title: "TikTokStatus", value: "TikTok Status", checked: true },
    { id: "8", title: "Action", value: "Action", checked: true },
  ]);

  const [selected, setSelected] = useState(0);
  const { mode, setMode } = useSetIndexFiltersMode();

  const { selectedResources, allResourcesSelected, handleSelectionChange } =
    useIndexResourceState(orders);
  //
  // filter out the heading of bydefault
  const filteredArray = items
    .filter((obj) => obj.checked == true)
    .map((obj) => ({ value: obj.value, title: obj.title }));

  const [rowMarkup, setRowMarkup] = useState(
    orders.map((row, index) => {
      <IndexTable.Row
        id={row.id}
        key={row.id}
        selected={selectedResources.includes(orders[index].id)}
        position={index}
      >
        {filteredArray.map((item, id) => {
          <IndexTable.Cell style={{ textAlign: "center" }} key={id}>
            <Text variant="bodyMd" fontWeight="bold" as="span">
              {item.title === "ProName"
                ? row[item.title].length > 15
                  ? row[item.title].slice(0, 20) + "...."
                  : row[item.title]
                : row[item.title]}
            </Text>
          </IndexTable.Cell>;
        })}
      </IndexTable.Row>;
    })
  );

  useEffect(() => {
    // filter out the heading of bydefault
    const filteredArray = items
      .filter((obj) => obj.checked == true)
      .map((obj) => ({ title: obj.title }));
    const newRows = orders.map((row, index) => (
      <IndexTable.Row
        id={row.id}
        key={row.id}
        selected={selectedResources.includes(row.id)}
        position={index}
      >
        {filteredArray.map((item, id) => {
          return (
            <IndexTable.Cell style={{ textAlign: "center" }} key={id}>
              <Text variant="bodyMd" fontWeight="bold" as="span">
                {/* <SkeletonBodyText lines={1}/> */}
                {item.title === "ProName"
                  ? row[item.title].length > 15
                    ? row[item.title].slice(0, 20) + "...."
                    : row[item.title]
                  : row[item.title]}
              </Text>
            </IndexTable.Cell>
          );
        })}
      </IndexTable.Row>
    ));
    setRowMarkup(newRows);
  }, [items, orders, selectedResources]);

  // callback function
  const updateParentValue = (newValue, newrowValue) => {
    setRowMarkup([...newrowValue]);
    setItems([...newValue]);
  };
  // Data Table Search
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (value) => {
    setSearchValue(value);
  };

  const resourceName = {
    singular: "order",
    plural: "orders",
  };

  // filter option show and hide
  const [showFilter, setShowFilter] = useState(false);
  const FilterHandle = () => {
    setShowFilter(!showFilter);
  };
  return (
    <Box>
      <div className="mTopBott20">
        <Grid>
          <Grid.Cell columnSpan={{ xs: 6, sm: 4, md: 4, lg: 8, xl: 8 }}>
            {showFilter === true ? (
              <Filters
                queryValue={queryValue}
                queryPlaceholder="Search items"
                // hideQueryField
                filters={filters}
                appliedFilters={appliedFilters}
                onQueryChange={handleFiltersQueryChange}
                onQueryClear={handleQueryValueRemove}
                onClearAll={handleFiltersClearAll}
              />
            ) : (
              <Tooltip content= "Search and Filter">
              <Button
                onClick={FilterHandle}
              >
                <InlineStack>
                  <Icon source={SearchMajor} tone="base" />
                  <Icon source={FilterMajor} tone="base" />
                </InlineStack>
              </Button>
              </Tooltip>
            )}
          </Grid.Cell>
          <Grid.Cell columnSpan={{ xs: 6, sm: 2, md: 2, lg: 4, xl: 4 }}>
            <div className="dis-Last">
              <ButtonGroup>
                <ParentContext.Provider
                  value={{ items, setItems, rowMarkup, setRowMarkup }}
                >
                  {/* <CustomizedTable */}
                  <CustomizedTable
                    updateParentValue={updateParentValue}
                    ordersRows={orders}
                  />
                </ParentContext.Provider>
                <Button size="large" icon={RefreshMinor}>
                  Sync{" "}
                </Button>
              </ButtonGroup>
            </div>
          </Grid.Cell>
        </Grid>
        <Box>
          <div className="mTopBott20">
            <IndexTable
              resourceName={resourceName}
              itemCount={orders.length}
              selectedItemsCount={
                selectedResources.length === orders.length
                  ? "All"
                  : selectedResources.length
              }
              onSelectionChange={handleSelectionChange}
              headings={filteredArray}
              pagination={true}
              promotedBulkActions={promotedBulkActions}
            >
              {rowMarkup}
            </IndexTable>
          </div>
        </Box>
      </div>
    </Box>
  );

  // Filter Functions
  function disambiguateLabel(key, value) {
    switch (key) {
      case "taggedWith":
        return `Tagged with ${value}`;
      case "availability":
        return value.map((val) => `Available on ${val}`).join(", ");
      case "productType":
        return value.join(", ");
      default:
        return value.toString();
    }
  }

  function isEmpty(value) {
    if (Array.isArray(value)) {
      return value.length === 0;
    } else {
      return value === "" || value == null;
    }
  }
}

export default ProductTable;

export { ParentContext };
