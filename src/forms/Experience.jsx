import { useForm } from "react-hook-form";
import ExperienceBox from "./ExperienceBox";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setWorkExperiences } from "../store";

import { Box, Typography, useTheme, Button } from "@mui/material";

const Experience = ({ onNext, onPrevious }) => {
  const [formBoxes, setFormBoxes] = useState([0]);
  const theme = useTheme();
  const main = theme.palette.primary.main;
  const dispatch = useDispatch();

  const { control, handleSubmit } = useForm();

  const handleAddMore = () => {
    setFormBoxes((prevBoxes) => [...prevBoxes, prevBoxes.length]);
  };

  const onSubmit = (data) => {
    dispatch(setWorkExperiences(data));
    onNext();
  };

  return (
    <Box
      width="100%"
      maxWidth="fit-content"
      p="1rem 4%"
      backgroundColor={theme.palette.background.alt}
      borderRadius="8px"
    >
      <Typography variant="h4" mb="1rem" color={main}>
        Work Experiences
      </Typography>
      <Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box>
            {formBoxes.map((index) => (
              <ExperienceBox key={index} control={control} index={index} />
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

          <Box display="flex" mt="1rem" gap="1rem" justifyContent="end">
            <Button size="large" variant="outlined" onClick={onPrevious}>
              Previous
            </Button>
            <Button size="large" variant="contained" type="submit">
              Next
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default Experience;
