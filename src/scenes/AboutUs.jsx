import { Box, Link, Typography, useTheme, useMediaQuery } from "@mui/material";
import aboutus from "../assets/aboutus.png";

import { LinkedIn } from "@mui/icons-material";
import { ContactMail } from "@mui/icons-material";
import { X } from "@mui/icons-material";
import { Instagram } from "@mui/icons-material";

const AboutUs = () => {
  const theme = useTheme();
  const primaryMain = theme.palette.primary.main;
  const isMobileScreen = useMediaQuery("(max-width: 600px)");

  return (
    <Box p="1rem" mt="2rem">
      <Box
        display="flex"
        flexDirection={isMobileScreen ? "column-reverse" : "row"}
        justifyContent="space-between"
        gap="2rem"
        borderRadius="8px"
        p={isMobileScreen ? "2rem 4%" : "4rem 4%"}
        backgroundColor={theme.palette.background.alt}
      >
        <Box width="100%">
          <Typography
            fontWeight="bold"
            fontSize="clamp(2rem, 4rem, 1.5rem)"
            mb="2rem"
          >
            About Us
          </Typography>
          <Typography variant="h5" mb="1rem" color={primaryMain}>
            Welcome to ResumeXpress!
          </Typography>
          <Typography fontSize="1rem" lineHeight="1.75rem" variant="subtitle">
            At ResumeXpress, we believe that every career journey deserves a
            stellar resume. Our mission? To empower job seekers like you with
            the tools and guidance needed to create impactful resumes that open
            doors to exciting opportunities.
            <br /> We’re a passionate team of career enthusiasts, wordsmiths,
            and design aficionados. Our collective goal? To transform your
            professional story into a compelling narrative that resonates with
            recruiters and hiring managers.
          </Typography>
          <Typography mt="1rem" color={primaryMain}>
            Find Us :
          </Typography>
          <Box
            mt="1rem"
            display="flex"
            justifyContent="space-between"
            gap="10px"
            alignContent="center"
            width="100%"
            maxWidth="200px"
          >
            <Link
              href="https://www.linkedin.com/in/nitin-prajapati1/"
              sx={{ cursor: "pointer" }}
            >
              <LinkedIn />
            </Link>
            <Link
              href="https://twitter.com/NitinPr_01"
              sx={{ cursor: "pointer" }}
            >
              <X />
            </Link>
            <Link
              href="https://www.instagram.com/nitin_prajapati15/"
              sx={{ cursor: "pointer" }}
            >
              <Instagram />
            </Link>
            <Link
              href="mailto:nitin.pr2002@gmail.com"
              sx={{ cursor: "pointer" }}
            >
              <ContactMail />
            </Link>
          </Box>
        </Box>
        <Box
          width="100%"
          maxWidth="600px"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <img src={aboutus} width="100%" height="auto" alt="img" />
        </Box>
      </Box>
    </Box>
  );
};

export default AboutUs;
