const timeCalculation = (date: string) => {
  const today = new Date();
  const time = new Date(date);

  const day = time.getDate() - today.getDate();

  console.log(day);
};

export default timeCalculation;
