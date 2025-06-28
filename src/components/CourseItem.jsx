import { crossBtn, desc, item } from './styles/CourseItem.css';

const CourseItem = ({ course, handleDelete, id }) => {
  return (
    <div className={item}>
      <div className={desc}>
        <p>Course Code: {course.code}</p>
        <p>Course Slot: {course.slots}</p>
        <p>Course Slot: {course.facs}</p>
      </div>
      <button className={crossBtn} onClick={() => handleDelete(id)}>
        &#x2715;
      </button>
    </div>
  );
};

export default CourseItem;
