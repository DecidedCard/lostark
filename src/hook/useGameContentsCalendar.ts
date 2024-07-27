import { useEffect, useMemo, useState } from "react";

import { useQuery } from "@tanstack/react-query";

import { contentsCalender } from "@/api/lostarkFetch";

import QUERY_KEY from "@/util/QUERY_KEY";

import useIslandStore from "@/store/islandStore";
import useFieldBossStore from "@/store/fieldBossStore";
import useGateStore from "@/store/gateStore";

import type { calendar } from "@/types/calendar";
import useTodayIslandStore from "@/store/todayIslandStore";

const useGameContentsCalendar = () => {
  const { island, setIsland } = useIslandStore();
  const { todayIsland, setTodayIsland } = useTodayIslandStore();
  const { fieldBoss, setFieldBoss } = useFieldBossStore();
  const { gate, setGate } = useGateStore();

  const today = new Date();

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
          if (new Date(item.StartTimes[0]).getDate() === today.getDate()) {
            setTodayIsland(item);
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

  if (gate.length !== 0) {
    for (let item of gate[0].StartTimes) {
      const date = new Date(item);
      if (today < date) {
        gateTime = item;
        break;
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

  return { isError, isFetching, todayIsland, fieldBossTime, gateTime };
};

export default useGameContentsCalendar;
