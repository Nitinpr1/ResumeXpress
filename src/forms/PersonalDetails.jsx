import { useForm } from "react-hook-form";
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

  const isMobileScreen = useMediaQuery("(max-width:800px)");

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
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
            {...register("firstName", {
              required: "First Name is required",
              minLength: {
                value: 4,
                message: "name should be minimum 4 characters",
              },
            })}
            margin="normal"
            fullWidth={isMobileScreen ? true : false}
            error={errors.firstName ? true : false}
            helperText={errors.firstName && errors.firstName.message}
          />

          <TextField
            label="Last Name"
            {...register("lastName", {
              required: "Last Name is required",
              minLength: {
                value: 4,
                message: "Should be minimum 4 characters",
              },
            })}
            margin="normal"
            fullWidth={isMobileScreen ? true : false}
            error={errors.lastName ? true : false}
            helperText={errors.lastName && errors.lastName.message}
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
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email",
              },
            })}
            margin="normal"
            fullWidth={isMobileScreen ? true : false}
            error={errors.email ? true : false}
            helperText={errors.email && errors.email.message}
          />
          <TextField
            label="Contact No"
            {...register("contact", {
              required: "Contact No is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Invalid contact number",
              },
            })}
            margin="normal"
            fullWidth={isMobileScreen ? true : false}
            error={errors.contact ? true : false}
            helperText={errors.contact && errors.contact.message}
          />
        </Box>
        <TextField
          fullWidth
          label="Address"
          {...register("address", {
            required: "Address is required",
            minLength: {
              value: 10,
              message: "should be minimum 10 characters",
            },
          })}
          margin="normal"
          error={errors.address ? true : false}
          helperText={errors.address && errors.address.message}
        />
        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="space-between"
          gap="1rem"
        >
          <TextField
            label="City"
            {...register("city", {
              required: "city is required",
              minLength: {
                value: 4,
                message: "should be minimum 4 characters",
              },
            })}
            margin="normal"
            fullWidth={isMobileScreen ? true : false}
            error={errors.city ? true : false}
            helperText={errors.city && errors.city.message}
          />
          <TextField
            label="PinCode"
            {...register("pinCode", {
              required: "pinCode is required",
              pattern: {
                value: /^[0-9]{6}$/,
                message: "Invalid  Pin Code",
              },
            })}
            margin="normal"
            fullWidth={isMobileScreen ? true : false}
            error={errors.pinCode ? true : false}
            helperText={errors.pinCode && errors.pinCode.message}
          />
        </Box>
        <TextField
          label="Specialization"
          {...register("specialization", {
            required: "eg. Frontend developer",
            minLength: {
              value: 4,
              message: "should be minimum 4 characters",
            },
          })}
          margin="normal"
          fullWidth
          error={errors.specialization ? true : false}
          helperText={errors.specialization && errors.specialization.message}
        />
        <Box width="100%">
          <TextField
            label="Objective"
            {...register("objective", {
              required: "Objective is required",
              minLength: {
                value: 50,
                message: "should be at least 50 characters",
              },
            })}
            multiline
            margin="normal"
            fullWidth
            rows={4}
            error={errors.objective ? true : false}
            helperText={errors.objective && errors.objective.message}
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
