import { useForm, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";

import {
  Box,
  Typography,
  useTheme,
  Button,
  useMediaQuery,
} from "@mui/material";

const PersonalDetails = () => {
  const theme = useTheme();
  const main = theme.palette.primary.main;
  const dark = theme.palette.primary.dark;
  const light = theme.palette.primary.light;

  const isMobileScreen = useMediaQuery("(max-width:800px)");

  const { register, handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Handle form submission here
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
        Personal Information
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="space-between"
          gap="1rem"
        >
          <TextField
            label="First Name"
            {...register("firstName")}
            margin="normal"
            fullWidth={isMobileScreen ? true : false}
          />
          <TextField
            label="Last Name"
            {...register("lastName")}
            margin="normal"
            fullWidth={isMobileScreen ? true : false}
          />
        </Box>
        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="space-between"
          gap="1rem"
        >
          <TextField
            label="Email"
            {...register("email")}
            margin="normal"
            fullWidth={isMobileScreen ? true : false}
          />
          <TextField
            label="Contact No"
            {...register("contact")}
            margin="normal"
            fullWidth={isMobileScreen ? true : false}
          />
        </Box>
        <TextField
          fullWidth
          label="Address"
          {...register("address")}
          margin="normal"
        />
        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="space-between"
          gap="1rem"
        >
          <TextField
            label="City"
            {...register("city")}
            margin="normal"
            fullWidth={isMobileScreen ? true : false}
          />
          <TextField
            label="PinCode"
            {...register("pinCode")}
            margin="normal"
            fullWidth={isMobileScreen ? true : false}
          />
        </Box>
        <TextField
          label="Specialization"
          {...register("specialization")}
          margin="normal"
          fullWidth
        />
        <Box width="100%">
          <TextField
            label="Objective"
            {...register("objective")}
            multiline
            margin="normal"
            fullWidth
            rows={4}
          />
        </Box>
        <Box display="flex" mt="1rem" gap="1rem" justifyContent="end">
          <Button size="large" variant="contained" type="submit">
            Next
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default PersonalDetails;
