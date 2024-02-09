import { Box, Typography, useTheme, List, ListItem } from "@mui/material";
import UserData from "../dummydata";

const Template2 = () => {
  const theme = useTheme();
  const main = theme.palette.template2.main;
  const dark = theme.palette.template2.dark;

  return (
    <Box
      width="100%"
      padding="1rem"
      border="1px solid gray"
      backgroundColor={theme.palette.background.alt}
    >
      {/* HEADER SECTION */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb="1rem"
      >
        <Box>
          <Typography color={dark} variant="h3">
            {UserData.personalDetails.name}
          </Typography>
          <Typography color={main} variant="subtitle">
            {UserData.personalDetails.tag}
          </Typography>
        </Box>
        <Box>
          <Typography color={main}>
            Email: {UserData.personalDetails.email}
          </Typography>
          <Typography color={main}>
            Contact No: {UserData.personalDetails.contactNumber}
          </Typography>
          <Typography color={main}>
            Address: {UserData.personalDetails.address}{" "}
            {UserData.personalDetails.city}
          </Typography>
        </Box>
      </Box>
      <br />
      {/* OBJECTIVE */}
      <Box m="1rem 0">
        <Typography
          borderBottom={`2px solid ${main}`}
          color={dark}
          fontSize="2rem"
          lineHeight="2rem"
          mb="1rem"
          pb="0.50rem"
        >
          Objective
        </Typography>
        <Typography>{UserData.objective.text}</Typography>
      </Box>
      {/* EXPERIENCE */}
      <Box>
        <Typography
          borderBottom={`2px solid ${main}`}
          color={dark}
          fontSize="2rem"
          lineHeight="2rem"
          pb="0.25rem"
        >
          Experience
        </Typography>
        <Box mb="0.5rem">
          <List sx={{ listStyle: "decimal", paddingLeft: "1.5rem" }}>
            {UserData.workExperience.map((experience, index) => (
              <ListItem key={index} sx={{ display: "list-item", padding: "0" }}>
                <Typography fontWeight="bold">
                  {experience.jobTitle} at {experience.companyName}
                </Typography>
                <Typography color={main}>
                  {experience.startDate} to {experience.endDate}
                </Typography>
                <Typography>{experience.description}</Typography>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
      {/* EDUCATION */}
      <Box m="1rem 0">
        <Typography
          borderBottom={`2px solid ${main}`}
          color={dark}
          fontSize="2rem"
          lineHeight="2rem"
          pb="0.25rem"
        >
          Education
        </Typography>
        <Box mb="0.5rem">
          <List sx={{ listStyle: "decimal", paddingLeft: "1.5rem" }}>
            {UserData.educationDetails.map((edu, index) => (
              <ListItem key={index} sx={{ display: "list-item", padding: "0" }}>
                <Typography fontWeight="bold">{edu.degreeName}</Typography>
                <Typography color={main}>
                  {edu.collegeName} {edu.startYear} to {edu.endYear}
                </Typography>
                <Typography>{edu.description}</Typography>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
      {/* KEY SKILLS */}
      <Box>
        <Typography
          borderBottom={`2px solid ${main}`}
          color={dark}
          fontSize="2rem"
          lineHeight="2rem"
          pb="0.25rem"
        >
          Skills
        </Typography>
        <List sx={{ listStyle: "decimal", paddingLeft: "1.5rem" }}>
          {UserData.keySkills.map((skill, index) => (
            <ListItem key={index} sx={{ display: "list-item", padding: "0" }}>
              {skill}
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default Template2;
