const timeCalculation = (date: string) => {
  let resultTime = "";
  const today = new Date();
  const time = new Date(date);

  const day = time.getDate() - today.getDate();
  const hours = time.getHours() - today.getHours();
  const minutes = today.getMinutes() - time.getMinutes();

  resultTime = `${
    day * 24 + hours - 1 < 10
      ? "0" + (day * 24 + hours - 1)
      : day * 24 + hours - 1
  }:${60 - minutes < 10 ? "0" + (60 - minutes) : 60 - minutes}`;

  return resultTime;
};

export default timeCalculation;
