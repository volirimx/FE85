export const turnNumberIntoArray = (number: number | undefined) => {
  if (!number) {
    return [];
  }
  const array = [];
  for (let i = 1; i <= number; i++) {
    array.push(i);
  }
  return array;
};
