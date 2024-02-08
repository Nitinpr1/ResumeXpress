import { Box, Typography, useTheme, Button } from "@mui/material";
import Template1 from "../ResumeTemplates/Template1";
import Template2 from "../ResumeTemplates/Template2";
import Template3 from "../ResumeTemplates/Template3";
import Template4 from "../ResumeTemplates/Template4";
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
          <Template1 />
          <Box className="overlayStyles">
            <Button variant="contained" color="primary">
              Use Template
            </Button>
          </Box>
        </Box>
        <Box className="template">
          <Template2 />
          <Box className="overlayStyles">
            <Button variant="contained" color="primary">
              Use Template
            </Button>
          </Box>
        </Box>
        <Box className="template">
          <Template3 />
          <Box className="overlayStyles">
            <Button variant="contained" color="primary">
              Use Template
            </Button>
          </Box>
        </Box>
        <Box className="template">
          <Template4 />
          <Box className="overlayStyles">
            <Button variant="contained" color="primary">
              Use Template
            </Button>
          </Box>
        </Box>

        {/* <Template2 />
        <Template3 />
        <Template4 /> */}
      </Box>
    </Box>
  );
};

export default Home;
