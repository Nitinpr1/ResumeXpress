import {
  Box,
  Divider,
  Typography,
  useTheme,
  List,
  ListItem,
} from "@mui/material";
import UserData from "../dummydata";
import { useSelector } from "react-redux";

const Template1 = () => {
  const theme = useTheme();
  const main = theme.palette.template1.main;
  const dark = theme.palette.template1.dark;
  const light = theme.palette.template1.light;
  const personalDetails = useSelector((state) => state.personalInfo);
  const workExperiences = useSelector((state) => state.workExperiences);
  const education = useSelector((state) => state.education);
  const skills = useSelector((state) => state.keySkills);

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
            {personalDetails.firstName} {personalDetails.lastName}
          </Typography>
          <Typography color={main} variant="subtitle">
            {personalDetails.specialization}
          </Typography>
        </Box>
        <Box>
          <Typography color={main}>Email: {personalDetails.email}</Typography>
          <Typography color={main}>
            Contact No: {personalDetails.contactNo}
          </Typography>
          <Typography color={main}>
            Address: {personalDetails.address} {personalDetails.city}
          </Typography>
        </Box>
      </Box>
      <Divider color={main} />
      {/* OBJECTIVE */}
      <Box m="1rem 0">
        <Typography
          backgroundColor={light}
          color={dark}
          fontSize="2rem"
          lineHeight="2rem"
          mb="1rem"
          p="0.25rem"
        >
          Objective
        </Typography>
        <Typography>{personalDetails.objective}</Typography>
      </Box>
      {/* EXPERIENCE */}
      <Box>
        <Typography
          backgroundColor={light}
          color={dark}
          fontSize="2rem"
          lineHeight="2rem"
          p="0.25rem"
        >
          Experience
        </Typography>
        <Box mb="0.5rem">
          <List sx={{ listStyle: "decimal", paddingLeft: "1.5rem" }}>
            {workExperiences.jobTitle.map((title, index) => (
              <ListItem key={index} sx={{ display: "list-item", padding: "0" }}>
                <Typography fontWeight="bold">
                  {title} at {workExperiences.orgName[index]}
                </Typography>
                <Typography color={main}>
                  {workExperiences.StartYear[index]} to{" "}
                  {workExperiences.endYear[index]}
                </Typography>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
      {/* EDUCATION */}
      <Box m="1rem 0">
        <Typography
          backgroundColor={light}
          color={dark}
          fontSize="2rem"
          lineHeight="2rem"
          p="0.25rem"
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
          <Typography fontWeight="bold">{education.educationType}</Typography>
          <Typography color={main}>
            {education.college} {education.startYear} to {education.endYear}
          </Typography>
          <Typography>{education.university}</Typography>
        </Box>
      </Box>
      {/* KEY SKILLS */}
      <Box>
        <Typography
          backgroundColor={light}
          color={dark}
          fontSize="2rem"
          lineHeight="2rem"
          p="0.25rem"
        >
          Skills
        </Typography>
        <List sx={{ listStyle: "decimal", paddingLeft: "1.5rem" }}>
          {skills.Skill.map((skill, index) => (
            <ListItem key={index} sx={{ display: "list-item", padding: "0" }}>
              {skill}
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default Template1;
