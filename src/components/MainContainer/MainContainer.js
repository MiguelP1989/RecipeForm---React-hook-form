// Third-party imports
import React from "react";
import { Container, makeStyles } from "@material-ui/core";

// Global imports

// Local imports

////////////////////////////////////////////////////////////////////////////////

const MainContainer = ({ children, ...props }) => {
  // Hooks
  const classes = useStyles();

  return (
    <Container
      className={classes.root}
      component="main"
      maxWidth="xs"
      {...props}
    >
      {children}
    </Container>
  );
};

// Styles
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "lightGray",
  },
}));

export default MainContainer;
