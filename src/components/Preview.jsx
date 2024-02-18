import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Template1 from "../ResumeTemplates/Template1";
import { TextField, Button } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import jsPDF from "jspdf";

const Preview = () => {
  const theme = useTheme();
  const main = theme.palette.primary.main;
  const isMobileScreen = useMediaQuery("(max-width:800px)");
  const doc = jsPDF();

  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    const { name } = data;
    doc.text("Submit", 10, 10);
    doc.save(`${name}.pdf`);
  };

  return (
    <Box
      p={isMobileScreen ? "1rem 4%" : "2rem 6%"}
      sx={{
        width: "100%",
        maxWidth: "98%",
        margin: "0 auto",
        marginTop: "10px",
        borderRadius: "8px",
      }}
    >
      <Box
        display="flex"
        flexDirection={isMobileScreen ? "column-reverse" : "row"}
        justifyContent="space-between"
        gap={isMobileScreen ? "1.5rem" : "4rem"}
      >
        <Box width="100%">
          <Template1 />
        </Box>
        <Box
          width="100%"
          maxWidth="300px"
          maxHeight="200px"
          p="1rem"
          backgroundColor={theme.palette.background.alt}
          borderRadius="5px"
        >
          <Typography color={main}>Give a name and save </Typography>

          <form onSubmit={handleSubmit(onSubmit)}>
            <Box
              mt="1rem"
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              gap="1rem"
            >
              <Controller
                name="resumeName"
                control={control}
                rules={{
                  required: "Required",
                }}
                render={({ field, fieldState }) => (
                  <TextField
                    label="Name"
                    {...field}
                    margin="normal"
                    fullWidth={isMobileScreen ? true : false}
                    error={!!fieldState.error}
                    helperText={fieldState.error?.message || ""}
                  />
                )}
              />
              <Button variant="contained" size="large" type="submit">
                Print
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default Preview;
