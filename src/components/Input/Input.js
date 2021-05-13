// Third-party imports
import React, { forwardRef } from "react";
import { TextField } from "@material-ui/core";

// Global imports

// Local imports

////////////////////////////////////////////////////////////////////////////////

const Input = forwardRef((props, ref) => {
  return (
    <>
      <TextField variant="outlined" margin="normal" ref={ref} {...props} />
    </>
  );
});

export default Input;
