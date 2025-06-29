import { getTemplate } from './template.js';
import { getData } from './functions.js';

export const generateTimetable = (data) => {
  const timetable = getTemplate();
  const registeredCourses = [];
  for (let course of data) {
    if (registeredCourses.indexOf(course.code) === -1) {
      const slots = course.slots.split('+').map((s) => `_${s.toLowerCase()}_`);
      console.log(slots);
    }
  }
};

const data = getData();
generateTimetable(data);
