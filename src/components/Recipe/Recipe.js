// Third-party imports
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Typography, Button } from "@material-ui/core";

// Global imports
import MainContainer from "../MainContainer";
import Form from "../Form/Form";
import Input from "../Input/Input";
import Ingredients from "../Ingredients/Ingredients";

// Local imports

////////////////////////////////////////////////////////////////////////////////

const Recipe = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      ingredients: [{ name: "Name", amount: "Amount" }],
    },
  });

  const { ref, ...rest } = register("amount", {
    max: {
      value: 10,
      message: "Maximum number of servings is 10.",
    },
  });

  const submitForm = (data) => {
    console.log(data);
  };

  return (
    <MainContainer>
      <Typography variant="h5">New Recipe</Typography>
      <Form onSubmit={handleSubmit(submitForm)}>
        <Input
          {...register("name", { required: "Recipe name is required" })}
          error={!!errors.name}
          helperText={errors?.name?.message}
          name="name"
          type="text"
          label="Name"
          fullWidth
        />
        <Input
          {...register("description", {
            maxLength: {
              value: 100,
              message: "Description cannot be longer than 100 characters.",
            },
          })}
          fullWidth
          error={!!errors.description}
          helperText={errors?.description?.message}
          name="description"
          label="Description"
          InputProps={{ disableUnderline: true }}
          multiline
          type="text"
          rows={9}
          variant="filled"
        />

        <Controller
          control={control}
          defaultValue={0}
          rules={{ max: 10 }}
          name="amount"
          render={() => (
            <Input
              fullWidth
              label="Servings"
              type="number"
              min={0}
              inputRef={ref}
              {...rest}
              error={!!errors.amount}
              helperText={errors?.amount?.message}
            />
          )}
        />
        <Ingredients register={register} />

        <Button fullWidth type="submit" variant="contained" color="primary">
          Save
        </Button>
      </Form>
    </MainContainer>
  );
};

export default Recipe;
