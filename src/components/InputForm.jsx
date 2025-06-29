import { useState } from 'react';
import {
  form,
  input,
  label,
  reset,
  addBtn,
  section,
  buttons,
  suggestion,
  suggestitem,
} from './styles/InputForm.css.js';
import { toast, Toaster } from 'react-hot-toast';
import { validate } from '../utils/functions.js';
import { v7 } from 'uuid';
import data from '../models/fall.json';

const InputForm = ({ handleAdd }) => {
  const [sem, setSem] = useState('');
  const [code, setCode] = useState('');
  const [name, setName] = useState('');
  const [slots, setSlots] = useState([]);
  const [faculties, setFaculties] = useState([]);
  const [coursesuggestion, setCoursesuggestion] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState('');
  const [selectedFaculty, setSelectedFaculty] = useState('');

  const handleSem = (e) => {
    setSem(e.target.value.toUpperCase());
  };

  const handleCode = (e) => {
    const input = e.target.value.toUpperCase();
    setCode(input);
    const suggestions = data
      .filter(
        (item) =>
          item['COURSE CODE'].includes(input) || item['COURSE TITLE'].toUpperCase().includes(input)
      )
      .reduce(
        (acc, item) => {
          const key = `${item['COURSE CODE']} - ${item['COURSE TITLE']}`;
          if (!acc.map.has(key)) {
            acc.map.set(key, true);
            acc.items.push({
              display: key,
              code: item['COURSE CODE'],
              title: item['COURSE TITLE'],
              slots: [item['SLOT']],
              faculties: [item['EMPLOYEE NAME']],
            });
          } else {
            const existing = acc.items.find((i) => i.code === item['COURSE CODE']);
            existing.slots.push(item.SLOT);
            existing.faculties.push(item['EMPLOYEE NAME']);
          }
          return acc;
        },
        { items: [], map: new Map() }
      ).items;
    setCoursesuggestion(suggestions);
    setName('');
  };

  const handleCourse = (item) => {
    setCode(item.code);
    setName(item.title);
    setSlots(item.slots);
    setFaculties(item.faculties);
  };

  const handleSlot = (e) => {
    const slotarr = e.target.value.split('+');
    var slotstr = '';
    for (var i = 0; i < slotarr.length - 1; i++) {
      slotstr += `_${slotarr[i]}_,`;
    }
    slotstr += `_${slotarr[slotarr.length - 1]}_`;
    setSelectedSlot(slotstr.toUpperCase());
  };

  const handleFaculty = (e) => {
    setSelectedFaculty(e.target.value.toUpperCase());
  };

  const handleForm = (e) => {
    e.preventDefault();
    console.log(code);
    console.log(selectedSlot);
    console.log(selectedFaculty);
  };

  return (
    <form className={form} onSubmit={handleForm}>
      <div className={section}>
        <label className={label} htmlFor="sem">
          Semester:
        </label>
        <select className={input} name="sem" id="sem" onChange={handleSem} value={sem}>
          <option value="fall">Fall Semester</option>
          <option value="winter">Winter Semester</option>
        </select>
      </div>
      <div className={section}>
        <label className={label} htmlFor="ccode">
          Code:
        </label>
        <input
          required
          placeholder="BCSE102L"
          className={input}
          type="text"
          name="ccode"
          id="ccode"
          value={`${code}${name.length > 0 ? ' - ' + name : ''}`}
          onChange={handleCode}
          autoFocus
        />
        {!name && coursesuggestion.length > 0 && code.length > 0 ? (
          <ul className={suggestion}>
            {coursesuggestion.slice(0, 10).map((item, index) => (
              <li className={suggestitem} key={index} onClick={() => handleCourse(item)}>
                {item.display.slice(0, 42)}..
              </li>
            ))}
          </ul>
        ) : (
          ''
        )}
      </div>
      <div className={section}>
        <label className={label} htmlFor="slots">
          Slot:
        </label>
        <select
          name="slots"
          id="slots"
          disabled={slots.length == 0}
          className={input}
          onChange={handleSlot}
        >
          <option disabled selected>
            Select Slot
          </option>
          {slots.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <div className={section}>
        <label className={label} htmlFor="faculties">
          Faculty:
        </label>
        <select
          name="faculties"
          id="faculties"
          disabled={faculties.length == 0}
          className={input}
          onChange={handleFaculty}
        >
          <option selected disabled>
            Select Faculty
          </option>
          {faculties.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <div className={buttons}>
        <button type="reset" className={reset}>
          Reset
        </button>
        <button type="submit" className={addBtn}>
          Add Course
        </button>
      </div>
      <Toaster />
    </form>
  );
};

export default InputForm;
