import React from "react";
import { useForm } from "react-hook-form";
import { TextField, Button } from "@mui/material";

interface SearchFormProps {
  setKeyword: (value: string) => void;
}

interface SearchFormValues {
  keyword: string;
}

const SearchForm = ({ setKeyword }: SearchFormProps) => {
  const { register, handleSubmit } = useForm<SearchFormValues>();

  const updateKeyword = ({ keyword }: SearchFormValues) => {
    setKeyword(keyword);
  };

  return (
    <form
      style={{ display: "flex", flexDirection: "column" }}
      onSubmit={handleSubmit(updateKeyword)}
    >
      <TextField
        placeholder="keyword"
        sx={{ my: ".5rem", display: "block", mx: "auto" }}
        {...register("keyword", { required: true })}
      />
      <Button
        variant="contained"
        type="submit"
        sx={{ display: "block", mx: "auto" }}
      >
        Search
      </Button>
    </form>
  );
};

export default SearchForm;

// 1. Import i wywołanie useForm, wyciągnij register i handleSubmit
// 2. Stwórz pustą funkcję updateKeyword.
// 3. JSX:
// - wszystko będzie w tagu form (html) w atrybucie style: display flex i flexDirection column. Skonfiguruj onSubmit zgodnie z useFormem.
// - w środku formularza:
// - TextField (MUI) placeholder="keyword", sx: my .5rem, display block, mx auto. Zarejestruj input pod nazwą keyword, input jest wymagany
// - Button (MUI) variant contained, type submit, sx: display block, mx auto. Text: Search