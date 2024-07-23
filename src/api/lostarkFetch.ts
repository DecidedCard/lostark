import lostark from "./lostarkApi";

export const characters = async (name: string) => {
  try {
    const info = await lostark.get(`/characters/${name}/siblings`);
    return info;
  } catch (error) {
    return error;
  }
};
