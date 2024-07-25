import { contentsCalender } from "@/api/lostarkFetch";
import QUERY_KEY from "@/util/QUERY_KEY";
import { useQuery } from "@tanstack/react-query";

const useGameContentsCalendar = () => {
  const { isError, isFetching, data } = useQuery({
    queryKey: [QUERY_KEY.gameContents],
    queryFn: contentsCalender,
    retry: 0,
    refetchOnWindowFocus: false,
  });

  return { isError, isFetching, data };
};

export default useGameContentsCalendar;
