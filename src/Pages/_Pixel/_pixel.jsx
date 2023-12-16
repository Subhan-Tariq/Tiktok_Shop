import React,{useState} from "react";
import { Page,Grid,Card, Divider ,InlineStack,Text} from "@shopify/polaris";
import DashReportRow from "../../Components/Dashboard/Dashboard";
import LineGraphData from "../../Components/LineChart/LineChart";
import DateRangePicker from "../../Components/DatePicker/DatePicker";
import StarRating from "../../Components/RatingStar/RatingStart";


export default function Pixel() {
const orderReport=[
    {heading:"Purchase",data:"00",helpinText:"Including Clicks on the store affiliate link and product affilate link"},
    {heading:"Initiate Checkout",data:"00",helpinText:"Including Clicks on the store affiliate link and product affilate link"},
    {heading:"Add to Cart",data:"00",helpinText:"Including Clicks on the store affiliate link and product affilate link"},
    {heading:"Content View",data:"00",helpinText:"Including Clicks on the store affiliate link and product affilate link"},
    {heading:"Page View",data:"00",helpinText:"Including Clicks on the store affiliate link and product affilate link"},
    {heading:"Search",data:"00",helpinText:"Including Clicks on the store affiliate link and product affilate link"},
];
  // Api Data fetch  check
  const [test,settest] = useState (false);
  return (
    (test === true ? (<SkeletonStructure/>):(
    <>
     <div className="margtop10">
    {/* <StarRating/> */}
    </div>
    <Page
    title="Analytics"
    compactTitle
    primaryAction={<DateRangePicker/>}
  >
    
    <div className="marginTop20">
        <div className="margtop10">
        <Grid>
              <Grid.Cell columnSpan={{xs: 6, sm: 6, md: 6, lg: 6, xl: 6}}>
                  <Card >
                  <DashReportRow heading={"Stats"} data={orderReport} colNumber={"3"}/>          
                  </Card>
                </Grid.Cell>
                <Grid.Cell columnSpan={{xs: 6, sm: 6, md: 6, lg: 6, xl: 6}}>
                  <Card title="Orders" sectioned>
                   <LineGraphData/>
                  </Card>
                </Grid.Cell>
        </Grid>
      </div>
      <div className="margintop30">
      </div>
      <Grid>
        <Grid.Cell columnSpan={{sx:3, sm:3}}>

        </Grid.Cell>
        <Grid.Cell columnSpan={{sx:6, sm:6}}>
          <Divider borderColor="border" borderWidth="100"/>
        </Grid.Cell>
        <Grid.Cell columnSpan={{sx:3, sm:3}}>

        </Grid.Cell>
      </Grid>
      </div>
  </Page>
  </>
    ))
  );
}
