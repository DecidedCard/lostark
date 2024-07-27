"use client";

import React, { useEffect, useState } from "react";

import useGameContentsCalendar from "@/hook/useGameContentsCalendar";
import timeCalculation from "@/util/timeCalculation";

const Schedule = () => {
  const { fieldBossTime, gateTime, todayIsland, isError, isFetching } =
    useGameContentsCalendar();
  const [fieldBossTimeCheck, setFieldBossTimeCheck] = useState("");
  const [gateTimeCheck, setGateTimeCheck] = useState("");
  console.log(todayIsland);

  const [timeCheck, setTimeCheck] = useState(true);

  useEffect(() => {
    if (fieldBossTime.length !== 0) {
      setFieldBossTimeCheck(timeCalculation(fieldBossTime));
    }

    if (gateTime.length !== 0) {
      setGateTimeCheck(timeCalculation(gateTime));
    }

    setTimeout(() => {
      setTimeCheck(!timeCheck);
    }, 1000 * 60);
  }, [fieldBossTime, gateTime, timeCheck]);

  if (isFetching) {
    return <div>로딩 중....</div>;
  }

  return (
    <div className="m-2 p-1 w-3/4 h-min border border-solid border-primary-200 rounded-lg">
      <h2 className="border-b border-solid border-primary-200">오늘의 일정</h2>

      <section className="flex justify-between">
        <label>모험 섬</label>
        <div className="flex gap-2">
          <p>예정된시간</p>
          <p>남은시간</p>
        </div>
      </section>

      <section className="border-b border-solid border-primary-200">
        <ol className="flex justify-between">
          <label>모험 섬</label>
          <p>보상</p>
        </ol>
        <ol className="flex justify-between">
          <label>모험 섬</label>
          <p>보상</p>
        </ol>
        <ol className="flex justify-between">
          <label>모험 섬</label>
          <p>보상</p>
        </ol>
      </section>

      <section className="my-2 border-b border-solid border-primary-200">
        <label>이주의 쌀섬</label>
        <div className="flex justify-evenly my-2">
          <ol className="flex justify-center items-center w-6 h-6 rounded-full bg-accent-100">
            수
          </ol>
          <ol className="flex justify-center items-center w-6 h-6 rounded-full bg-accent-100">
            목
          </ol>
          <ol className="flex justify-center items-center w-6 h-6 rounded-full bg-accent-100">
            금
          </ol>
          <ol className="flex justify-center items-center w-6 h-6 rounded-full bg-accent-100">
            토
          </ol>
          <ol className="flex justify-center items-center w-6 h-6 rounded-full bg-accent-100">
            일
          </ol>
          <ol className="flex justify-center items-center w-6 h-6 rounded-full bg-accent-100">
            월
          </ol>
          <ol className="flex justify-center items-center w-6 h-6 rounded-full bg-accent-100">
            화
          </ol>
        </div>
      </section>

      <section className="my-2 flex justify-between border-b border-solid border-primary-200">
        <label>필드보스</label>
        <div className="flex gap-2">
          <p>{fieldBossTime.slice(11, 16)}</p>
          <p>{fieldBossTimeCheck}</p>
        </div>
      </section>

      <section className="my-2 flex justify-between">
        <label>카오스게이트</label>
        <div className="flex gap-2">
          <p>{gateTime.slice(11, 16)}</p>
          <p>{gateTimeCheck}</p>
        </div>
      </section>
    </div>
  );
};

export default Schedule;
