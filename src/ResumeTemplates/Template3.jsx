import {
  Box,
  Divider,
  Typography,
  useTheme,
  List,
  ListItem,
} from "@mui/material";

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
            John Smith
          </Typography>
          <Typography color={light} variant="subtitle">
            Frontend Developer
          </Typography>
        </Box>
        <Box>
          <Typography color={light}>Email: john@gmail.com</Typography>
          <Typography color={light}>Contact No: 2334456778</Typography>
          <Typography color={light}>Address: New York City</Typography>
        </Box>
      </Box>
      <Divider />
      {/* OBJECTIVE */}
      <Box p="1rem" backgroundColor={dark}>
        <Typography color={light}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
          laudantium dolorem corrupti aliquid voluptatibus, soluta beatae
          laboriosam in modi nisi recusandae eveniet fugit enim repellendus
          magni ducimus adipisci maiores laborum.
        </Typography>
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
            <Typography
              p="0.50rem"
              borderRadius="0.50rem"
              width="fit-content"
              backgroundColor={dark}
              color={light}
            >
              HTML
            </Typography>
            <Typography
              p="0.50rem"
              borderRadius="0.50rem"
              width="fit-content"
              backgroundColor={dark}
              color={light}
            >
              CSS
            </Typography>
            <Typography
              p="0.50rem"
              borderRadius="0.50rem"
              width="fit-content"
              backgroundColor={dark}
              color={light}
            >
              Javascript
            </Typography>
            <Typography
              p="0.50rem"
              borderRadius="0.50rem"
              width="fit-content"
              backgroundColor={dark}
              color={light}
            >
              React Js
            </Typography>
            <Typography
              p="0.50rem"
              borderRadius="0.50rem"
              width="fit-content"
              backgroundColor={dark}
              color={light}
            >
              Next Js
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Template3;
