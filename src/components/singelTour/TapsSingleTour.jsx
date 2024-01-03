"use client";
import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import dynamic from "next/dynamic";
const HighLights = dynamic(() => import("@/components/singelTour/HighLights"));
const Itinerary = dynamic(() => import("@/components/singelTour/Itinerary"));
const AccommodationPrice = dynamic(() =>
  import("@/components/singelTour/AccommodationPrice")
);
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function TapsSingleTour({ tourData }) {
  const {
    destinations,
    description,
    included,
    excluded,
    run,
    type,
    duration,
    itineraries,
    tour_notes,
    template_prices,
    facilities,
  } = tourData;
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="mt-5 sticky top-[-30px] z-[1000]">
      <Box sx={{ width: "100%" }}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
            py: 1,
            px: 1,
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab
              className="!text-xl !font-medium !capitalize "
              label="Highlight"
              {...a11yProps(0)}
            />
            <Tab
              className="!text-xl !font-medium !capitalize "
              label="Itinerary"
              {...a11yProps(1)}
            />
            <Tab
              className="!text-xl !font-medium !capitalize "
              label="Prices"
              {...a11yProps(2)}
            />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <HighLights
            description={description}
            included={included}
            excluded={excluded}
            run={run}
            type={type}
            duration={duration}
            destinations={destinations}
            facilities={facilities}
          />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Itinerary itinerariesDays={itineraries} />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <AccommodationPrice
            notsPrise={tour_notes}
            template_prices={template_prices}
          />
        </CustomTabPanel>
      </Box>
    </div>
  );
}

export default TapsSingleTour;
