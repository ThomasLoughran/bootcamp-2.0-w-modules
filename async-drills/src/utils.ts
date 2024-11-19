export const sleep = async (seconds: number) => {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
};

export const isError = () => {
  const MAXIMUM_NUMBER = 3;
  const randomNumber = Math.floor(Math.random() * MAXIMUM_NUMBER) + 1;

  return randomNumber === 2;
};
