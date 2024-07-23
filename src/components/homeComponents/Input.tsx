"use client";

import React from "react";

import { useForm, SubmitHandler } from "react-hook-form";

import type { CharacterSearchInput } from "@/types/input";

const Input = () => {
  const { register, handleSubmit } = useForm<CharacterSearchInput>();

  const onSubmitHandler: SubmitHandler<CharacterSearchInput> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)} className="mx-auto">
      <input {...register("name")} className="w-96" />
      <button type="submit">검색</button>
    </form>
  );
};

export default Input;
