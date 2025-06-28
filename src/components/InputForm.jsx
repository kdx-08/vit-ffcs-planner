import { useState } from 'react';
import { form, input, label, reset, addBtn, section, buttons } from './styles/InputForm.css.js';
import { toast, Toaster } from 'react-hot-toast';
import { validate } from '../utils/functions.js';
import { v7 } from 'uuid';

const InputForm = ({ handleAdd }) => {
  const [code, setCode] = useState('');
  const [slots, setSlots] = useState('');
  const [faculties, setFaculties] = useState('');

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
      const course = code.trim();
      const slot = slots.trim();
      const fac = faculties.trim();
      if (validate(course, slot, fac) === 'exists') toast.error('Course already exists');
      else {
        handleAdd({ id: v7(), code: course, slots: slot, facs: fac });
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
          value={code}
          onChange={handleCode}
          autoFocus
        />
      </div>
      <div className={section}>
        <label className={label} htmlFor="slots">
          Slot:
        </label>
        <input
          required
          placeholder="A1+TA1"
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
          Faculty:
        </label>
        <input
          required
          placeholder="Faculty A"
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
