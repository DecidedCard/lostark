import React from "react";

import { useForm, SubmitHandler } from "react-hook-form";

import type { CharacterSearchInput } from "@/types/input";

const Input = () => {
  const { register, handleSubmit } = useForm<CharacterSearchInput>();

  const onSubmitHandler: SubmitHandler<CharacterSearchInput> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <input {...register("name")} />
    </form>
  );
};

export default Input;
