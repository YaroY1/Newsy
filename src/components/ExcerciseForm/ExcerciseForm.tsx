import { Button, TextField } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";

interface ExcerciseFormProps {
  setUsersFirstName: (val: string) => void;
}

interface ExcerciseFormValues {
  name: string;
  secondName: string;
}

const ExcerciseForm = ({ setUsersFirstName }: ExcerciseFormProps) => {
  const { register, handleSubmit } = useForm<ExcerciseFormValues>();

  const submitHandler = ({ name, secondName }: ExcerciseFormValues) => {
    setUsersFirstName(name);
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <TextField placeholder="name" {...register("name", { required: true })} />
      <TextField
        placeholder="second name"
        {...register("secondName", { required: true })}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default ExcerciseForm;