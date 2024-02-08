import {
  Box,
  Divider,
  Typography,
  useTheme,
  List,
  ListItem,
} from "@mui/material";

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
        <Typography color={light}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
          laudantium dolorem corrupti aliquid voluptatibus, soluta beatae
          laboriosam in modi nisi recusandae eveniet fugit enim repellendus
          magni ducimus adipisci maiores laborum.
        </Typography>
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
        <Box
          m="1rem 0"
          display="flex"
          justifyContent="space-between"
          alignItems="start"
        >
          <Typography fontWeight="bold">
            Frontend Developer at Google
          </Typography>
          <Box>
            <Typography color={light}>2020 to Present</Typography>
            <Typography>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam,
              impedit!
            </Typography>
          </Box>
        </Box>
        <Divider />
        <Box
          m="1rem 0"
          display="flex"
          justifyContent="space-between"
          alignItems="start"
        >
          <Typography fontWeight="bold">Frontend Developer at XYZ</Typography>
          <Box>
            <Typography color={light}>2020 to Present</Typography>
            <Typography>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam,
              impedit!
            </Typography>
          </Box>
        </Box>
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
            color={light3}
          >
            HTML
          </Typography>
          <Typography
            p="0.50rem"
            borderRadius="0.50rem"
            width="fit-content"
            backgroundColor={dark}
            color={light3}
          >
            CSS
          </Typography>
          <Typography
            p="0.50rem"
            borderRadius="0.50rem"
            width="fit-content"
            backgroundColor={dark}
            color={light3}
          >
            Javascript
          </Typography>
          <Typography
            p="0.50rem"
            borderRadius="0.50rem"
            width="fit-content"
            backgroundColor={dark}
            color={light3}
          >
            React Js
          </Typography>
          <Typography
            p="0.50rem"
            borderRadius="0.50rem"
            width="fit-content"
            backgroundColor={dark}
            color={light3}
          >
            Next Js
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default Template4;
