import { useState } from 'react';
import { form, input, label, reset, addBtn, section, buttons } from './styles/InputForm.css.js';
import { toast, Toaster } from 'react-hot-toast';
import { validate } from '../utils/functions.js';

const InputForm = ({ handleAdd }) => {
  const date = new Date().getMonth();
  const [sem, setSem] = useState(date >= 5 && date <= 10 ? 'fall' : 'winter');
  const [code, setCode] = useState('');
  const [slots, setSlots] = useState('');
  const [faculties, setFaculties] = useState('');

  const handleSem=(e)=>{
    setSem(e.target.value.toUpperCase());
  }

  const handleCode = (e) => {
    setCode(e.target.value.toUpperCase());
  };

  const handleSlots = (e) => {
    setSlots(e.target.value.toUpperCase());
  };

  const handleFaculties = (e) => {
    setFaculties(e.target.value.toUpperCase());
  };

  const handleForm = (e) => {
    e.preventDefault();
    try {
      const course = code;
      const slotList = slots.split(',').map((s) => s.trim());
      const facList = faculties.split(',').map((f) => f.trim());
      if (validate(course, slotList, facList) === 'exists') toast.error('Course already exists');
      else if (validate(course, slotList, facList) === 'invalid')
        toast.error('Slot and faculty count should be same');
      else {
        handleAdd({ code: course, slots: slotList, facs: facList });
        toast.success('Added course');
        setCode('');
        setSlots('');
        setFaculties('');
      }
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong');
    }
  };

  return (
    <form className={form} onSubmit={handleForm}>
      <div className={section}>
        <label className={label} htmlFor="sem">
          Semester:
        </label>
        <select className={input} name="sem" id="sem" onChange={handleSem}>
          <option selected={date >= 5 && date <= 10} value="fall">
            Fall Semester
          </option>
          <option selected={date == 11 || (date >= 0 && date <= 4)} value="winter">
            Winter Semester
          </option>
        </select>
      </div>
      <div className={section}>
        <label className={label} htmlFor="ccode">
          Course Code:
        </label>
        <input
          required
          placeholder="BCSE102L"
          className={input}
          type="text"
          name="ccode"
          id="ccode"
          value={code}
          onChange={handleCode}
          autoFocus
        />
      </div>
      <div className={section}>
        <label className={label} htmlFor="slots">
          Slot List:
        </label>
        <input
          required
          placeholder="A1+TA1, G1+TG1"
          className={input}
          type="text"
          name="slots"
          id="slots"
          value={slots}
          onChange={handleSlots}
        />
      </div>
      <div className={section}>
        <label className={label} htmlFor="faculties">
          Faculties:
        </label>
        <input
          required
          placeholder="Faculty A, Faculty B"
          className={input}
          type="text"
          name="faculties"
          id="faculties"
          value={faculties}
          onChange={handleFaculties}
        />
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
