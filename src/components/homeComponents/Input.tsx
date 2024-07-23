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
    <form
      onSubmit={handleSubmit(onSubmitHandler)}
      className="flex mx-auto mt-2 w-min h-8 border border-solid border-black"
    >
      <input {...register("name")} placeholder="캐릭터 검색" className="w-96" />
      <button type="submit" className="w-10">
        검색
      </button>
    </form>
  );
};

export default Input;
