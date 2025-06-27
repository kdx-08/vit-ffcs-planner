import { container } from './styles/Start.css';
import InputForm from '../components/InputForm';
import CourseList from '../components/CourseList';
import { getData, saveData } from '../utils/functions';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';

const Start = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const data = getData();
    setCourses(data);
  }, []);

  const handleDelete = (code) => {
    saveData(courses.filter((c) => c.code !== code));
    setCourses((oldCourses) => oldCourses.filter((c) => c.code !== code));
  };

  const handleAdd = (course) => {
    saveData([...courses, course]);
    setCourses((oldCourses) => [...oldCourses, course]);
  };

  return (
    <div className={container}>
      <Navbar />
      <InputForm handleAdd={handleAdd} />
      <CourseList courses={courses} handleAdd={handleAdd} handleDelete={handleDelete} />
    </div>
  );
};

export default Start;
