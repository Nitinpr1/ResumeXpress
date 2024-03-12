import {
  Box,
  Typography,
  useTheme,
  Button,
  useMediaQuery,
} from "@mui/material";
import Template1 from "../ResumeTemplates/Template1";
import Template2 from "../ResumeTemplates/Template2";
import Template3 from "../ResumeTemplates/Template3";
import Template4 from "../ResumeTemplates/Template4";

import { template1, template2, template3, template4 } from "../assets";
import { useDispatch, useSelector } from "react-redux";
import {
  setTemplate1,
  setTemplate2,
  setTemplate3,
  setTemplate4,
} from "../store";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const theme = useTheme();
  const primaryMain = theme.palette.primary.main;
  const isMobileScreen = useMediaQuery("(max-width:600px)");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const istemplate1Selected = useSelector((state) => state.template1);
  const istemplate2Selected = useSelector((state) => state.template2);
  const istemplate3Selected = useSelector((state) => state.template3);
  const istemplate4Selected = useSelector((state) => state.template4);

  const handleTemplate1 = () => {
    if (istemplate2Selected) {
      dispatch(setTemplate2());
    }
    if (istemplate3Selected) {
      dispatch(setTemplate3());
    }
    if (istemplate4Selected) {
      dispatch(setTemplate4());
    }

    dispatch(setTemplate1());
    navigate("/myResume");
  };
  const handleTemplate2 = () => {
    if (istemplate1Selected) {
      dispatch(setTemplate1());
    }
    if (istemplate3Selected) {
      dispatch(setTemplate3());
    }
    if (istemplate4Selected) {
      dispatch(setTemplate4());
    }

    dispatch(setTemplate2());
    navigate("/myResume");
  };
  const handleTemplate3 = () => {
    if (istemplate1Selected) {
      dispatch(setTemplate1());
    }
    if (istemplate2Selected) {
      dispatch(setTemplate2());
    }

    if (istemplate4Selected) {
      dispatch(setTemplate4());
    }

    dispatch(setTemplate3());
    navigate("/myResume");
  };
  const handleTemplate4 = () => {
    if (istemplate1Selected) {
      dispatch(setTemplate1());
    }
    if (istemplate2Selected) {
      dispatch(setTemplate2());
    }
    if (istemplate3Selected) {
      dispatch(setTemplate3());
    }

    dispatch(setTemplate4());
    navigate("/myResume");
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "98%",
        margin: "0 auto",
        marginTop: "10px",
        borderRadius: "8px",
      }}
      backgroundColor={theme.palette.background.alt}
      p={isMobileScreen ? "2rem 4%" : "4rem 8%"}
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
            <Button
              variant="contained"
              color="primary"
              onClick={handleTemplate1}
            >
              Use Template
            </Button>
          </Box>
        </Box>
        <Box className="template">
          <img width="100%" src={template2} alt="img" />
          {/* <Template2 /> */}
          <Box className="overlayStyles">
            <Button
              variant="contained"
              color="primary"
              onClick={handleTemplate2}
            >
              Use Template
            </Button>
          </Box>
        </Box>
        <Box className="template">
          <img width="100%" src={template3} alt="img" />
          {/* <Template3 /> */}
          <Box className="overlayStyles">
            <Button
              variant="contained"
              color="primary"
              onClick={handleTemplate3}
            >
              Use Template
            </Button>
          </Box>
        </Box>
        <Box className="template">
          <img width="100%" src={template4} alt="img" />
          {/* <Template4 /> */}
          <Box className="overlayStyles">
            <Button
              variant="contained"
              color="primary"
              onClick={handleTemplate4}
            >
              Use Template
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
