import React from "react";
import { Page ,Card,Tabs,Badge,Icon,ButtonGroup,Button,} from "@shopify/polaris";
import { useState,useCallback, } from "react";
import ProductTable from "../../Components/ProductTable/ProductTable";
import {
  RefreshMinor,EditMinor,TiktokMinor
} from '@shopify/polaris-icons';
import {useNavigate} from 'react-router-dom';

export default function Products() {


  const navigate = useNavigate();

  const handleClick = () => {
    // 👇️ navigate programmatically
    navigate('/editproduct');
  };
  // Tabs
  const [itemStrings, setItemStrings] = useState([
    'All',
    'Not Uploaded',
    'In Progress',
    'Live',
    'Reviewing',
    'Failed',
    'Inactive'
  ]);
  
const badge= ['38','10','20','40','0','10','0']
  const tabs = itemStrings.map((item, index) => ({
    content: item,
    index,
    badge: badge[index],
    onAction: () => {},
  id: `${item}-${index}`,
  isLocked: index === 0,
}));

 // Tabs 
 const [selectedTab, setSelectedTab] = useState(0);

 const handleTabChange = useCallback(
   (selectedTabIndex) => setSelectedTab(selectedTabIndex),
   [],
 );

 const Allorders = [
  {
    id: '1',
    ProImage: (
      <img src="src/Images/download.webp" style={{width:"40px", height:"40px"}}/>
    ), 
    ProName: 'Gift Card Gift Card vGift Card Gift Card vGift Card vGift Card vGift Card vGift Card Gift Card' ,
    ProType: '',
    Vendor: 'Snowboard Vendor',
    Variations: '4',
    ShopifyStatus:<Badge tone='success'> Active</Badge>,
    TikTokStatus:<Badge>
      <Icon
    source={TiktokMinor}
    tone="base"
  /></Badge>,
    Action: <>
    <ButtonGroup>
    <Button icon={EditMinor} onClick={handleClick}>Edit</Button>
      <Button icon={RefreshMinor}> Sync</Button>
    </ButtonGroup>
    </>,
  },
  {
    id: '2',
    ProImage: (
        <img src="src/Images/download.webp" style={{width:"40px", height:"40px"}}/>
      ),
    ProName: 'Selling Plans Ski Wax',
    ProType: '',
    Vendor: '	LusaOrganic',
    Variations: '3',
    ShopifyStatus:<Badge tone='success'> Active</Badge>,
    TikTokStatus:<Badge>
      <Icon
    source={TiktokMinor}
    tone="base"
  /></Badge>,
    Action: <>
    <ButtonGroup>
    <Button icon={EditMinor} onClick={handleClick}>Edit</Button>
      <Button icon={RefreshMinor}> Sync</Button>
    </ButtonGroup>
    </>,
  },
  {
    id: '3',
    ProImage: (
        <img src="src/Images/download.webp" style={{width:"40px", height:"40px"}}/>
      ),
    ProName: 'Electric Mini Garlic Chopper',
    ProType	: 'test',
    Vendor: '	BERA ROSA',
    Variations: '1',
    ShopifyStatus:<Badge tone='success'> Active</Badge>,
    TikTokStatus:<Badge>
      <Icon
    source={TiktokMinor}
    tone="base"
  /></Badge>,
    Action: <>
    <ButtonGroup>
    <Button icon={EditMinor} onClick={handleClick}>Edit</Button>
      <Button icon={RefreshMinor}> Sync</Button>
    </ButtonGroup>
    </>,
  },
];

 
    // Api Data fetch  check
    const [test,settest] = useState (false);
    return (
      (test === true ? (<SkeletonStructure/>):(
    <Page
      title="Produts Page"
    >
      <Card>
      <Tabs tabs={tabs} selected={selectedTab} onSelect={handleTabChange} >  
      {selectedTab == 0 ? (<ProductTable orders={Allorders}/>) : (selectedTab == 1 ? (<ProductTable orders={Allorders}/>): (selectedTab == 2 ? (<ProductTable orders={Allorders}/>): (selectedTab == 3 ? (<ProductTable orders={Allorders}/>): (selectedTab == 4 ? (<ProductTable orders={Allorders}/>):(selectedTab == 5 ? (<ProductTable orders={Allorders}/>):(<ProductTable orders={Allorders}/>))))))} 
      
      </Tabs>
      </Card>
    </Page>
      ))
  );
}
