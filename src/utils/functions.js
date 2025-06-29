import { slotList } from './slotList';

export const getData = () => {
  if (localStorage.getItem('ffcs_planner_data'))
    return JSON.parse(localStorage.getItem('ffcs_planner_data'));
  return [];
};

export const saveData = (obj) => {
  const stringValue = JSON.stringify(obj);
  localStorage.setItem('ffcs_planner_data', stringValue);
};

export const validate = ({ code, slots, faculty }) => {
  const oldData = getData();
  if (oldData) {
    const existItem = oldData.find(
      (i) => i.code === code && i.faculty === faculty && i.slots === slots
    );
    if (existItem) {
      return 'exists';
    }
  }
  return 'valid';
};

export const transform = (slots) => {
  let transformedSlots = [];
  for (let slot of slots) {
    transformedSlots = transformedSlots.concat(slotList.filter((s) => s.includes(slot)));
  }
  return transformedSlots;
};
