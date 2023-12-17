export const getKeys = (data: any, keys: string[]) => {
  const allKeys = data.columns.filter((d, i) => i !== 0);
  if (!keys || keys.length === 0) return [];
  const newKeys = [];
  for (const element of keys) {
    const key = element;
    if (allKeys.includes(key)) newKeys.push(key);
  }
  return newKeys;
};
