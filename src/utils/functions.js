export const getData = () => {
  if (localStorage.getItem('ffcs_planner_data'))
    return JSON.parse(localStorage.getItem('ffcs_planner_data'));
  return [];
};

export const saveData = (obj) => {
  const stringValue = JSON.stringify(obj);
  localStorage.setItem('ffcs_planner_data', stringValue);
};

export const validate = (code, slotList, facList) => {
  const oldData = getData() || [];
  if (oldData) {
    const existItem = oldData.find((i) => i.code === code);
    if (existItem) {
      if (existItem.slots === slotList && existItem.facs === facList) return 'exists';
    }
  }
  return 'valid';
};
