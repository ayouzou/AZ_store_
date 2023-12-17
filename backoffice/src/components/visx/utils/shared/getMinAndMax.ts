export const getMinAndMax = (d: any) => {
  const values = [];
  let YMin = 0;
  let YMax = 0;
  for (const element of d) {
    for (const key in element) {
      if (isNaN(element[key])) continue;
      values.push(element[key]);
    }
  }
  YMin = Math.min(...values);
  YMax = Math.max(...values);
  return [YMin, YMax];
};
