import { useForm, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
import { setPersonalInfo } from "../store";

import {
  Box,
  Typography,
  useTheme,
  Button,
  useMediaQuery,
} from "@mui/material";

const PersonalDetails = ({ onNext }) => {
  const theme = useTheme();
  const main = theme.palette.primary.main;

  const isMobileScreen = useMediaQuery("(max-width:800px)");
  const dispatch = useDispatch();

  const { handleSubmit, control } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      contactNo: "",
      address: "",
      city: "",
      pinCode: "",
      specialization: "",
      objective: "",
    },
  });

  const onSubmit = (data) => {
    dispatch(setPersonalInfo(data));
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
        Personal Information
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="space-between"
          gap="1rem"
        >
          <Controller
            name="firstName"
            control={control}
            rules={{
              required: "first name is required",
              minLength: {
                value: 4,
                message: "should be at least 4 characters",
              },
            }}
            render={({ field, fieldState }) => (
              <TextField
                label="First Name"
                {...field}
                margin="normal"
                fullWidth={isMobileScreen ? true : false}
                error={!!fieldState.error}
                helperText={fieldState.error?.message || ""}
              />
            )}
          />
          <Controller
            name="lastName"
            control={control}
            rules={{
              required: "last name is required",
              minLength: {
                value: 4,
                message: "should be at least 4 characters",
              },
            }}
            render={({ field, fieldState }) => (
              <TextField
                label="Last Name"
                {...field}
                margin="normal"
                fullWidth={isMobileScreen ? true : false}
                error={!!fieldState.error}
                helperText={fieldState.error?.message || ""}
              />
            )}
          />
        </Box>
        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="space-between"
          gap="1rem"
        >
          <Controller
            name="email"
            control={control}
            rules={{
              required: "email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email",
              },
            }}
            render={({ field, fieldState }) => (
              <TextField
                label="Email"
                {...field}
                margin="normal"
                fullWidth={isMobileScreen ? true : false}
                error={!!fieldState.error}
                helperText={fieldState.error?.message || ""}
              />
            )}
          />
          <Controller
            name="contactNo"
            control={control}
            rules={{
              required: "Contact No is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Invalid contact number",
              },
            }}
            render={({ field, fieldState }) => (
              <TextField
                label="Contact No"
                {...field}
                margin="normal"
                fullWidth={isMobileScreen ? true : false}
                error={!!fieldState.error}
                helperText={fieldState.error?.message || ""}
              />
            )}
          />
        </Box>
        <Controller
          name="address"
          control={control}
          rules={{
            required: "Address is required",
            minLength: {
              value: 4,
              message: "should be at least 4 characters",
            },
          }}
          render={({ field, fieldState }) => (
            <TextField
              label="Address"
              {...field}
              margin="normal"
              fullWidth
              error={!!fieldState.error}
              helperText={fieldState.error?.message || ""}
            />
          )}
        />

        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="space-between"
          gap="1rem"
        >
          <Controller
            name="city"
            control={control}
            rules={{
              required: "City is required",
              minLength: {
                value: 3,
                message: "should be at least 3 characters",
              },
            }}
            render={({ field, fieldState }) => (
              <TextField
                label="City"
                {...field}
                margin="normal"
                fullWidth={isMobileScreen ? true : false}
                error={!!fieldState.error}
                helperText={fieldState.error?.message || ""}
              />
            )}
          />
          <Controller
            name="pinCode"
            control={control}
            rules={{
              required: "PinCode is required",
              pattern: {
                value: /^[0-9]{6}$/,
                message: "Invalid  Pin Code",
              },
            }}
            render={({ field, fieldState }) => (
              <TextField
                label="PinCode"
                {...field}
                margin="normal"
                fullWidth={isMobileScreen ? true : false}
                error={!!fieldState.error}
                helperText={fieldState.error?.message || ""}
              />
            )}
          />
        </Box>
        <Controller
          name="specialization"
          control={control}
          rules={{
            required: "Specialization is required",
            minLength: {
              value: 4,
              message: "should be at least 4 characters",
            },
          }}
          render={({ field, fieldState }) => (
            <TextField
              label="Specialization"
              {...field}
              margin="normal"
              fullWidth
              error={!!fieldState.error}
              helperText={fieldState.error?.message || ""}
            />
          )}
        />

        <Box width="100%">
          <Controller
            name="objective"
            control={control}
            rules={{
              required: "Objective is required",
              minLength: {
                value: 50,
                message: "should be at least 50 characters",
              },
            }}
            render={({ field, fieldState }) => (
              <TextField
                label="Objective"
                {...field}
                multiline
                margin="normal"
                fullWidth
                rows={4}
                error={!!fieldState.error}
                helperText={fieldState.error?.message || ""}
              />
            )}
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
