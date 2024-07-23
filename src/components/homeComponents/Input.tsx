"use client";

import React from "react";

import { useForm, SubmitHandler } from "react-hook-form";
import { AiOutlineSearch } from "react-icons/ai";

import type { CharacterSearchInput } from "@/types/input";

const Input = () => {
  const { register, handleSubmit } = useForm<CharacterSearchInput>();

  const onSubmitHandler: SubmitHandler<CharacterSearchInput> = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmitHandler)}
      className="flex mx-auto mt-2 w-min h-8 bg-primary-100 rounded-lg"
    >
      <input
        {...register("name")}
        placeholder="캐릭터 검색"
        className="w-96 pl-1 bg-primary-100 rounded-lg focus:outline-none"
      />
      <button type="submit" className="flex justify-center items-center w-10">
        <AiOutlineSearch />
      </button>
    </form>
  );
};

export default Input;
