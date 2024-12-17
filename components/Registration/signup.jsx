import React from "react";
import { Stack, TextField, Button } from "@mui/material";

export const SignUpForm = () => {
  return (
    <form>
      <Stack gap={5}>
        <TextField label="Set User Name" />
        <TextField label="Set Email" />
        <TextField label="Set Password" type="password" />
        <TextField label="Confirm Password" type="password" />
        <Button variant="contained" size="lg">
          Register with Us
        </Button>
      </Stack>
    </form>
  );
};

export default SignUpForm;
