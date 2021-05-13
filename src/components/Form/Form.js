// Third-party imports
import React from "react";
import { makeStyles } from "@material-ui/core";

// Global imports

// Local imports

////////////////////////////////////////////////////////////////////////////////

const Form = ({ children, ...props }) => {
  // Hooks
  const classes = useStyles();
  return (
    <form className={classes.root} novalidade="true" {...props}>
      {children}
    </form>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
}));

export default Form;
