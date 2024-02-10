import { Box, Typography, useMediaQuery } from "@mui/material";
import Tabbar from "../components/Tabbar";

const MyResume = () => {
  const isMobileScreen = useMediaQuery("(max-width:600px)");
  return (
    <Box
      p={isMobileScreen ? "1rem 4%" : "4rem 6%"}
      sx={{
        width: "100%",
        maxWidth: "98%",
        margin: "0 auto",
        marginTop: "10px",
        borderRadius: "8px",
      }}
    >
      <Box width="100%">
        <Tabbar />
      </Box>
    </Box>
  );
};

export default MyResume;
