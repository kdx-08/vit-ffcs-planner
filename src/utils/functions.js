export const getData = () => {
  return JSON.parse(localStorage.getItem('ffcs_planner_data'));
};

export const saveData = (obj) => {
  const stringValue = JSON.stringify(obj);
  localStorage.setItem('ffcs_planner_data', stringValue);
};

export const validate = (code, slotList, facList) => {
  const oldData = getData() || [];
  if (oldData) {
    if (oldData.find((i) => i.code === code)) return 'exists';
  }
  if (slotList.length !== facList.length) return 'invalid';
  const newData = [...oldData, { code, slots: slotList, facs: facList }];
  saveData(newData);
  return 'valid';
};
