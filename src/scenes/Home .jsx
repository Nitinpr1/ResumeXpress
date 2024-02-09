import { Box, Typography, useTheme, Button } from "@mui/material";
import Template1 from "../ResumeTemplates/Template1";
import Template2 from "../ResumeTemplates/Template2";
import Template3 from "../ResumeTemplates/Template3";
import Template4 from "../ResumeTemplates/Template4";

import { template1, template2, template3, template4 } from "../assets";
const Home = () => {
  const theme = useTheme();
  const primaryMain = theme.palette.primary.main;

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "98%",
        padding: "4rem 8%",
        margin: "0 auto",
        marginTop: "10px",
        borderRadius: "8px",
      }}
      backgroundColor={theme.palette.background.alt}
    >
      <Typography
        fontSize="clamp(2rem, 4rem, 1.5rem)"
        color={primaryMain}
        mb="2rem"
        textAlign="center"
      >
        Select one of the Template and Build your Resume !
      </Typography>
      <Box
        display="grid"
        gridTemplateColumns="repeat(auto-fit, minmax(280px, 1fr))"
        gap="1rem"
        width="100%"
        maxWidth={{
          xs: "100%",
          sm: "fit-content",
          md: "fit-content",
          lg: "fit-content",
        }}
      >
        <Box className="template">
          <img width="100%" src={template1} alt="img" />
          {/* <Template1 /> */}
          <Box className="overlayStyles">
            <Button variant="contained" color="primary">
              Use Template
            </Button>
          </Box>
        </Box>
        <Box className="template">
          <img width="100%" src={template2} alt="img" />
          {/* <Template2 /> */}
          <Box className="overlayStyles">
            <Button variant="contained" color="primary">
              Use Template
            </Button>
          </Box>
        </Box>
        <Box className="template">
          <img width="100%" src={template3} alt="img" />
          {/* <Template3 /> */}
          <Box className="overlayStyles">
            <Button variant="contained" color="primary">
              Use Template
            </Button>
          </Box>
        </Box>
        <Box className="template">
          <img width="100%" src={template4} alt="img" />
          {/* <Template4 /> */}
          <Box className="overlayStyles">
            <Button variant="contained" color="primary">
              Use Template
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
