import CourseItem from './CourseItem';
import { list } from './styles/CourseList.css';
import { sechead } from '../pages/styles/Section.css';

const CourseList = ({ courses, handleDelete }) => {
  return (
    <div className={list}>
      <h2 className={sechead}>Course List</h2>
      <hr />
      <div>
        {courses.map((course, index) => (
          <CourseItem course={course} handleDelete={handleDelete} key={index} />
        ))}
      </div>
    </div>
  );
};

export default CourseList;
