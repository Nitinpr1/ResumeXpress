import {
  Box,
  Divider,
  Typography,
  useTheme,
  List,
  ListItem,
} from "@mui/material";
import UserData from "../dummydata";

export const Template4 = () => {
  const theme = useTheme();
  const main = theme.palette.template4.main;
  const dark = theme.palette.template4.dark;
  const light = theme.palette.template4.light;
  const light3 = theme.palette.template3.light;
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
          <Typography textTransform="uppercase" color={dark} variant="h3">
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
            Address:{UserData.personalDetails.address}{" "}
            {UserData.personalDetails.city}
          </Typography>
        </Box>
      </Box>
      <Divider color={main} sx={{ height: "10px", borderRadius: "8px" }} />
      {/* OBJECTIVE */}
      <Box m="1rem 0">
        <Typography
          borderBottom={`1px solid ${main}`}
          color={dark}
          fontSize="2rem"
          lineHeight="3rem"
          m="1rem 0"
        >
          Objective
        </Typography>
        <Typography color={light}>{UserData.objective.text}</Typography>
      </Box>
      {/* EXPERIENCE */}
      <Box>
        <Typography
          borderBottom={`1px solid ${main}`}
          color={dark}
          fontSize="2rem"
          lineHeight="3rem"
        >
          Experience
        </Typography>
        {UserData.workExperience.map((experience, index) => (
          <>
            <Box
              key={index}
              m="1rem 0"
              display="flex"
              justifyContent="space-between"
              gap="0.5rem"
              alignItems="start"
            >
              <Typography fontWeight="bold">
                {experience.jobTitle} at {experience.companyName}
              </Typography>
              <Box>
                <Typography color={light}>
                  {experience.startDate} to {experience.endDate}
                </Typography>
                <Typography>{experience.description}</Typography>
              </Box>
            </Box>
            <Divider />
          </>
        ))}
      </Box>
      {/* EDUCATION */}
      <Box m="1rem 0">
        <Typography
          borderBottom={`1px solid ${main}`}
          color={dark}
          fontSize="2rem"
          lineHeight="3rem"
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
              color={light3}
            >
              {skill}
            </Typography>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
export default Template4;
