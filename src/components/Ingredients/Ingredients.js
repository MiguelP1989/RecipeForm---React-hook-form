// Third-party imports
import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { Button, makeStyles, Grid, useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

// Global imports
import Input from "../Input/Input";

// Local imports

////////////////////////////////////////////////////////////////////////////////

const Ingredients = ({ register }) => {
  // Hooks
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("xs"));
  const { control } = useForm({
    defaultValues: {
      ingredients: [{ name: "Name", amount: "Amount" }],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "ingredients",
  });

  return (
    <>
      {fields.map((item, index) => {
        return (
          <Grid
            container
            direction={matches ? "column" : "row"}
            align="center"
            key={item.id}
            spacing={1}
          >
            <Grid item xs={matches ? 12 : 6}>
              <Input
                fullWidth
                {...register(`ingredients[${index}].name`)}
                label="Name"
                name={`ingredients[${index}].name`}
                id={`ingredients[${index}].name`}
                control={control}
              />
            </Grid>
            <Grid item xs={matches ? 12 : 6}>
              <Input
                fullWidth
                {...register(`ingredients[${index}].amount`)}
                label="Amount"
                control={control}
                defaultValue={item.text}
                name={`ingredients[${index}].amount`}
                id={`ingredients[${index}].amount`}
              />
            </Grid>
            <Button
              className={classes.delete}
              type="button"
              variant="contained"
              color="secondary"
              onClick={() => remove(index)}
            >
              Delete
            </Button>
          </Grid>
        );
      })}
      <Button
        className={classes.btnAdd}
        type="button"
        variant="contained"
        color="primary"
        fullWidth
        onClick={() => append({ name: "", amount: "" })}
      >
        Add ingredient
      </Button>
    </>
  );
};

// Styles
const useStyles = makeStyles((theme) => ({
  btnAdd: {
    margin: theme.spacing(2, 0, 2, 0),
  },
  delete: {
    [theme.breakpoints.down("xs")]: {
      height: "3rem",
    },
  },
}));

export default Ingredients;
