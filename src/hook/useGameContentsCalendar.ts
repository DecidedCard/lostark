import { useEffect, useMemo, useState } from "react";

import { useQuery } from "@tanstack/react-query";

import { contentsCalender } from "@/api/lostarkFetch";

import QUERY_KEY from "@/util/QUERY_KEY";

import useIslandStore from "@/store/islandStore";
import useFieldBossStore from "@/store/fieldBossStore";
import useGateStore from "@/store/gateStore";
import useTodayIslandStore from "@/store/todayIslandStore";

import type { calendar } from "@/types/calendar";

const useGameContentsCalendar = () => {
  const { setIsland } = useIslandStore();
  const { todayIsland, setTodayIsland } = useTodayIslandStore();
  const { fieldBoss, setFieldBoss } = useFieldBossStore();
  const { gate, setGate } = useGateStore();

  const today = new Date();

  let islandTime = "";
  let fieldBossTime = "";
  let gateTime = "";

  const { isError, isFetching, data } = useQuery({
    queryKey: [QUERY_KEY.gameContents],
    queryFn: contentsCalender,
    retry: 0,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    const today = new Date();
    if (!isFetching && data) {
      data.map((item: calendar) => {
        if (item.CategoryName === "모험 섬") {
          setIsland(item);
          for (let i of item.StartTimes) {
            if (
              today.getDate() === new Date(i).getDate() &&
              today.getHours() < new Date(i).getHours()
            ) {
              setTodayIsland(item);
              break;
            }
          }
        }
        if (item.CategoryName === "필드보스") {
          setFieldBoss(item);
        }
        if (item.CategoryName === "카오스게이트") {
          setGate(item);
        }
      });
    }
  }, [data, isFetching, setIsland, setTodayIsland, setFieldBoss, setGate]);

  if (todayIsland.length !== 0) {
    for (let i of todayIsland) {
      for (let j of i.StartTimes) {
        const date = new Date(j);
        if (today < date) {
          console.log("check");
          islandTime = j;
          break;
        }
      }
    }
  }

  if (fieldBoss.length !== 0) {
    for (let item of fieldBoss[0].StartTimes) {
      const date = new Date(item);
      if (today < date) {
        fieldBossTime = item;
        break;
      }
    }
  }

  if (gate.length !== 0) {
    for (let item of gate[0].StartTimes) {
      const date = new Date(item);
      if (today < date) {
        gateTime = item;
        break;
      }
    }
  }

  return {
    isError,
    isFetching,
    todayIsland,
    islandTime,
    fieldBossTime,
    gateTime,
  };
};

export default useGameContentsCalendar;
