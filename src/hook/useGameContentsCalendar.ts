import { useEffect } from "react";

import { useQuery } from "@tanstack/react-query";

import { contentsCalender } from "@/api/lostarkFetch";

import QUERY_KEY from "@/util/QUERY_KEY";

import useIslandStore from "@/store/islandStore";
import useFieldBossStore from "@/store/fieldBossStore";
import useGateStore from "@/store/gateStore";

import type { calendar } from "@/types/calendar";

const useGameContentsCalendar = () => {
  const { island, setIsland } = useIslandStore();
  const { fieldBoss, setFieldBoss } = useFieldBossStore();
  const { gate, setGate } = useGateStore();

  const { isError, isFetching, data } = useQuery({
    queryKey: [QUERY_KEY.gameContents],
    queryFn: contentsCalender,
    retry: 0,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (!isFetching && data) {
      data.map((item: calendar) => {
        if (item.CategoryName === "모험 섬") {
          setIsland(item);
        }
        if (item.CategoryName === "필드보스") {
          setFieldBoss(item);
        }
        if (item.CategoryName === "카오스게이트") {
          setGate(item);
        }
      });
    }
  }, [data, isFetching, setIsland, setFieldBoss, setGate]);

  const today = new Date();

  let fieldBossTime = "";
  let gateTime = "";

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

  return { isError, isFetching, island, fieldBossTime, gateTime };
};

export default useGameContentsCalendar;
