import {
  Box,
  Divider,
  Typography,
  useTheme,
  List,
  ListItem,
} from "@mui/material";
import UserData from "../dummydata";

const Template3 = () => {
  const theme = useTheme();
  const main = theme.palette.template3.main;
  const dark = theme.palette.template3.dark;
  const light = theme.palette.template3.light;

  return (
    <Box
      width="100%"
      border="1px solid gray"
      backgroundColor={theme.palette.background.alt}
    >
      {/* HEADER SECTION */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        backgroundColor={dark}
        p="1rem"
      >
        <Box>
          <Typography textTransform="uppercase" color={light} variant="h3">
            {UserData.personalDetails.name}
          </Typography>
          <Typography color={light} variant="subtitle">
            {UserData.personalDetails.tag}
          </Typography>
        </Box>
        <Box>
          <Typography color={light}>
            Email: {UserData.personalDetails.email}
          </Typography>
          <Typography color={light}>
            Contact No: {UserData.personalDetails.contactNumber}
          </Typography>
          <Typography color={light}>
            Address: {UserData.personalDetails.address}{" "}
            {UserData.personalDetails.city}
          </Typography>
        </Box>
      </Box>
      <Divider />
      {/* OBJECTIVE */}
      <Box p="1rem" backgroundColor={dark}>
        <Typography color={light}>{UserData.objective.text}</Typography>
      </Box>
      <Box p="1rem">
        {/* EXPERIENCE */}
        <Box>
          <Typography
            borderBottom={`1px solid ${main}`}
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
                <ListItem
                  key={index}
                  sx={{ display: "list-item", padding: "0" }}
                >
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
            borderBottom={`1px solid ${main}`}
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
                <ListItem
                  key={index}
                  sx={{ display: "list-item", padding: "0" }}
                >
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
            borderBottom={`1px solid ${main}`}
            color={dark}
            fontSize="2rem"
            lineHeight="2rem"
            pb="0.25rem"
          >
            Skills
          </Typography>
          <Box
            mt="1rem"
            width="100%"
            display="flex"
            justifyContent="start"
            gap="1rem"
            flexWrap="wrap"
          >
            {UserData.keySkills.map((skill, index) => (
              <Typography
                key={index}
                p="0.50rem"
                borderRadius="0.50rem"
                width="fit-content"
                backgroundColor={dark}
                color={light}
              >
                {skill}
              </Typography>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Template3;
