import React from "react";
import { TextField, Button } from "@mui/material";

function Form() {
  return (
    <div>
      <TextField label="email" />
      <TextField label="password" type="password" />
      <Button variant="contained" color="primary">
        Submit
      </Button>
    </div>
  );
}

export default Form;
