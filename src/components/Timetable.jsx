import { useEffect, useState } from 'react';
import data from '../models/slots.json';
import {
  table,
  theader,
  ttheader,
  day,
  lunch,
  tdefault,
  filled,
  clash,
} from './styles/Timetable.css';
import { getData, transform } from '../utils/functions';
import { getTemplate } from '../utils/template';
import toast from 'react-hot-toast';

const Timetable = () => {
  const [timetableData, setTimeTableData] = useState(getData());
  const timetable = getTemplate();

  useEffect(() => {
    for (let course of timetableData) {
      const slots = transform(course.slots.split(',').map((s) => s.toLowerCase()));
      for (let slot of slots) {
        const block = document.getElementById(slot);
        if (!timetable[slot].isFilled) {
          timetable[slot].code = course.code;
          timetable[slot].isFilled = true;
          block.classList.add(filled);
          block.innerText = course.code;
        } else {
          console.log(`${course.code} is clashing`);
          block.innerText += ` ${course.code}`;
          block.classList.add(clash);
        }
      }
    }
  }, []);

  return (
    <div>
      <br />
      <table className={table}>
        <thead>
          <tr className={theader}>
            <td className={ttheader}>
              Lecture
              <br />
              Hours
            </td>
            {data.theoryHours.map((item, index) => (
              <>
                {index == 6 && <td></td>}
                <td className={ttheader}>{item}</td>
              </>
            ))}
          </tr>
          <tr className={theader}>
            <td className={ttheader}>
              Lab
              <br />
              Hours
            </td>
            {data.labHours.map((item, index) => (
              <>
                {index == 6 && <td></td>}
                <td className={ttheader}>{item}</td>
              </>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.days.map((item, index) => (
            <tr key={index}>
              <td className={day}>{item.day}</td>
              {item.slots.map((slot, i) => (
                <>
                  {index === 0 && i === 6 && (
                    <td className={lunch} rowSpan={data.days.length}>
                      LUNCH
                    </td>
                  )}
                  <td
                    className={`${ttheader} ${tdefault}`}
                    key={i}
                    id={`_${slot.split(' / ')[0].toLowerCase()}_${slot
                      .split(' / ')[1]
                      ?.toLowerCase()}_`}
                  >
                    {slot}
                  </td>
                </>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Timetable;
