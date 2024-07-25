import { useQuery } from "@tanstack/react-query";

import { contentsCalender } from "@/api/lostarkFetch";

import QUERY_KEY from "@/util/QUERY_KEY";

import useIslandStore from "@/store/islandStore";

const useGameContentsCalendar = () => {
  const { setIsland } = useIslandStore();
  const { isError, isFetching, data } = useQuery({
    queryKey: [QUERY_KEY.gameContents],
    queryFn: contentsCalender,
    retry: 0,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 60 * 24,
  });

  return { isError, isFetching, data };
};

export default useGameContentsCalendar;
