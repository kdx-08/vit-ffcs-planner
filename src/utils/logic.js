import { getTemplate } from './template.js';

export const generateTimetable = (data) => {
  const timetable = getTemplate();
  const registeredCourses = [];
  for (let course of data) {
    if (registeredCourses.indexOf(course) === -1) {
      const slots = course.slots.split('+').map((s) => `_${s.toLowerCase()}_`);
    }
  }
};

const data = [
  {
    id: '0197b5e6-50b6-7097-ac27-2120fded567e',
    code: 'BCSE102L',
    slots: 'G1',
    facs: 'MANSOOR',
  },
  {
    id: '0197b5e6-76d5-748d-a623-90a3fa64a6ab',
    code: 'BJAP102L',
    slots: 'B2',
    facs: 'JAYASHREE',
  },
  {
    id: '0197b5e6-b815-75f8-a5f3-69e283b3ebcb',
    code: 'BMAT201L',
    slots: 'A1+TA1',
    facs: 'RADHA S',
  },
];
generateTimetable(data);
