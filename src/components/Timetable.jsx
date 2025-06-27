import data from '../models/slots.json';
import { table, theader, ttheader, day, lunch, tdefault } from './styles/Timetable.css';

const Timetable = () => {
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
                    id={slot.split(' / ')[0] + slot.split(' / ')[1]}
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
