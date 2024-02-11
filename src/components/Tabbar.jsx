import React, { useState } from "react";
import { Tabs, Tab, Box, useTheme, useMediaQuery } from "@mui/material";
import PersonalDetails from "../forms/PersonalDetails";
import Experience from "../forms/Experience";

const VerticalTabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const theme = useTheme();
  const lightGray = theme.palette.neutral.light;
  const dark = theme.palette.primary.dark;
  const light = theme.palette.primary.light;

  const isMobileScreen = useMediaQuery("(max-width:600px)");

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box
      display="flex"
      flexDirection={isMobileScreen ? "column" : "row"}
      justifyContent="space-between"
      gap={isMobileScreen ? "1rem" : "4rem"}
    >
      <Box
        width={isMobileScreen ? "100%" : "20%"}
        minWidth="250px"
        maxHeight="200px"
        backgroundColor={theme.palette.background.alt}
      >
        <Tabs
          width="100%"
          orientation={isMobileScreen ? "horizontal" : "vertical"}
          variant="scrollable"
          value={activeTab}
          onChange={handleTabChange}
          sx={{
            borderRadius: "5px",
          }}
        >
          <Tab
            sx={{
              borderBottom: `1px solid ${lightGray}`,
            }}
            label="Personal Info"
          />
          <Tab
            sx={{
              borderBottom: `1px solid ${lightGray}`,
            }}
            label="Work Experience"
          />
          <Tab
            sx={{
              borderBottom: `1px solid ${lightGray}`,
            }}
            label="Education"
          />
          <Tab
            sx={{
              borderBottom: `1px solid ${lightGray}`,
            }}
            label="Skills"
          />
        </Tabs>
      </Box>

      <Box width="100%">
        {/* Render content based on the active tab */}
        {activeTab === 0 && (
          <div>
            <PersonalDetails />
          </div>
        )}
        {activeTab === 1 && (
          <div>
            <Experience />
          </div>
        )}
        {activeTab === 2 && <div>Education content goes here</div>}
        {activeTab === 3 && <div>Skills content goes here</div>}
      </Box>
    </Box>
  );
};

export default VerticalTabs;
