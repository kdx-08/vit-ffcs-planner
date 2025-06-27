import CourseItem from './CourseItem';
import { list } from './styles/CourseList.css';
import { sechead } from '../pages/styles/Section.css';

const CourseList = () => {
  return (
    <div className={list}>
      <h2 className={sechead}>Course List</h2>
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
