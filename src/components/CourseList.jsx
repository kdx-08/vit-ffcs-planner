import CourseItem from './CourseItem';
import { sechead } from '../pages/styles/Section.css';
import { noCaption, courseContainer } from './styles/CourseList.css';

const CourseList = ({ courses, handleDelete }) => {
  return (
    <div>
      <h2 className={sechead}>Course List</h2>
      <hr />
      <div className={courseContainer}>
        {courses.length > 0 ? (
          courses.map((course, index) => (
            <CourseItem
              course={course}
              handleDelete={handleDelete}
              id={course.id}
              key={course.id}
            />
          ))
        ) : (
          <p className={noCaption}>
            There are no courses in the timetable, add one to see it here!
          </p>
        )}
      </div>
    </div>
  );
};

export default CourseList;
