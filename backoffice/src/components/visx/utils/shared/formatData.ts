export const formatData = (data: { rows: any[]; columns: any[] }) => {
  const keys = data.columns;
  const YValues = [];

  for (const element of data.rows) {
    const row = element;
    const obj = {};
    for (let j = 0; j < keys.length; j++) {
      obj[keys[j]] = row[j];
    }
    YValues.push(obj);
  }
  return YValues;
};
