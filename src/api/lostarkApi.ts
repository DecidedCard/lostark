import axios from "axios";

const lostark = axios.create({
  baseURL: "https://developer-lostark.game.onstove.com",
  headers: {
    Authorization: `bearer ${process.env.NEXT_PUBLIC_LOSTARK_API_KEY}`,
  },
});

export default lostark;
