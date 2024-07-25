"use client";

import React from "react";

import { useRouter } from "next/navigation";

import { useForm, SubmitHandler } from "react-hook-form";
import { AiOutlineSearch } from "react-icons/ai";

import type { CharacterSearchInput } from "@/types/input";

const Input = () => {
  const { register, handleSubmit } = useForm<CharacterSearchInput>();

  const navigate = useRouter();

  const onSubmitHandler: SubmitHandler<CharacterSearchInput> = (data) => {
    navigate.push("/characterInfo");
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmitHandler)}
      className="flex justify-center items-center h-16 border-b border-solid border-primary-100"
    >
      <div className="flex w-min h-10 bg-primary-100 rounded-lg">
        <input
          {...register("name")}
          placeholder="캐릭터 검색"
          className="w-[720px] pl-1 bg-primary-100 rounded-lg focus:outline-none"
        />
        <button type="submit" className="flex justify-center items-center w-10">
          <AiOutlineSearch />
        </button>
      </div>
    </form>
  );
};

export default Input;
