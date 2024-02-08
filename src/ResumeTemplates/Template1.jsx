import {
  Box,
  Divider,
  Typography,
  useTheme,
  List,
  ListItem,
} from "@mui/material";

const Template1 = () => {
  const theme = useTheme();
  const main = theme.palette.template1.main;
  const dark = theme.palette.template1.dark;
  const light = theme.palette.template1.light;

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
            John Smith
          </Typography>
          <Typography color={main} variant="subtitle">
            Frontend Developer
          </Typography>
        </Box>
        <Box>
          <Typography color={main}>Email: john@gmail.com</Typography>
          <Typography color={main}>Contact No: 2334456778</Typography>
          <Typography color={main}>Address: New York City</Typography>
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
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
          laudantium dolorem corrupti aliquid voluptatibus, soluta beatae
          laboriosam in modi nisi recusandae eveniet fugit enim repellendus
          magni ducimus adipisci maiores laborum.
        </Typography>
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
            <ListItem sx={{ display: "list-item", padding: "0" }}>
              <Typography fontWeight="bold">
                Frontend Developer at Google
              </Typography>
              <Typography color={main}>2020 to present</Typography>
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit, aut!
              </Typography>
            </ListItem>
            <ListItem sx={{ display: "list-item", padding: "0" }}>
              <Typography fontWeight="bold">
                Frontend Developer at XYZ
              </Typography>
              <Typography color={main}>2018 to 2020</Typography>
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit, aut!
              </Typography>
            </ListItem>
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
            <ListItem sx={{ display: "list-item", padding: "0" }}>
              <Typography fontWeight="bold">
                Bachelor of Science in Computer Science
              </Typography>
              <Typography color={main}>
                Mumbai University 2015 to 2018
              </Typography>
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit, aut!
              </Typography>
            </ListItem>
            <ListItem sx={{ display: "list-item", padding: "0" }}>
              <Typography fontWeight="bold">HSC</Typography>
              <Typography color={main}>2013 to 2015</Typography>
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit, aut!
              </Typography>
            </ListItem>
          </List>
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
          <ListItem sx={{ display: "list-item", padding: "0" }}>HTML</ListItem>
          <ListItem sx={{ display: "list-item", padding: "0" }}>CSS</ListItem>
          <ListItem sx={{ display: "list-item", padding: "0" }}>
            Javascript
          </ListItem>
          <ListItem sx={{ display: "list-item", padding: "0" }}>
            React Js
          </ListItem>
          <ListItem sx={{ display: "list-item", padding: "0" }}>
            Next Js
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Template1;
