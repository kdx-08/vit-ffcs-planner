import CourseItem from './CourseItem';
import { heading, list } from './styles/CourseList.css';

const CourseList = () => {
  return (
    <div className={list}>
      <h2 className={heading}>Course List</h2>
      <hr />
      <div>
        <CourseItem />
        <CourseItem />
        <CourseItem />
      </div>
    </div>
  );
};

export default CourseList;
