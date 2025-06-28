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

  const handleDelete = (id) => {
    saveData(courses.filter((c) => c.id !== id));
    setCourses((oldCourses) => oldCourses.filter((c) => c.id !== id));
  };

  const handleAdd = (course) => {
    saveData([...courses, course]);
    setCourses((oldCourses) => [...oldCourses, course]);
  };

  return (
    <div className={container}>
      <Navbar />
      <InputForm handleAdd={handleAdd} />
      <CourseList courses={courses} handleDelete={handleDelete} />
    </div>
  );
};

export default Start;
