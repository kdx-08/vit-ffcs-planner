import { crossBtn, desc, item } from './styles/CourseItem.css';

const CourseItem = ({ course, handleDelete }) => {
  return (
    <div className={item}>
      <div className={desc}>
        <p>Course Code: {course.code}</p>
        {course.slots.map((c, i) => {
          return (
            <p key={i}>
              {c} &rArr; {course.facs[i]}
            </p>
          );
        })}
      </div>
      <button className={crossBtn} onClick={() => handleDelete(course.code)}>
        &#x2715;
      </button>
    </div>
  );
};

export default CourseItem;
