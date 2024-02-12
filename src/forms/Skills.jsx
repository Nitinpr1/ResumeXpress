import { useForm, Controller } from "react-hook-form";
import { useState } from "react";

import {
  Box,
  Typography,
  useTheme,
  Button,
  TextField,
  useMediaQuery,
  FormControl,
  InputLabel,
} from "@mui/material";
import SkillsBox from "./SkillsBox";

const Skills = () => {
  const theme = useTheme();
  const main = theme.palette.primary.main;
  const isMobileScreen = useMediaQuery("(max-width:800px)");

  const [skillField, setskillField] = useState([0]);

  const handleAddMore = () => {
    setskillField((prevField) => [...prevField, prevField.length]);
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Box
      width="100%"
      maxWidth="550px"
      p="1rem 4%"
      backgroundColor={theme.palette.background.alt}
      borderRadius="8px"
    >
      <Typography variant="h4" mb="1rem" color={main}>
        Key Skills
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box width="100%" display="flex" flexWrap="wrap">
          <Box>
            {skillField.map((index) => (
              <SkillsBox key={index} control={control} index={index} />
            ))}
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            mt="0.5rem"
          >
            <Button onClick={handleAddMore}>Add More</Button>
          </Box>
        </Box>
        <Box display="flex" mt="1rem" gap="1rem" justifyContent="end">
          <Button size="large" variant="outlined">
            Previous
          </Button>
          <Button size="large" variant="contained" type="submit">
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Skills;
