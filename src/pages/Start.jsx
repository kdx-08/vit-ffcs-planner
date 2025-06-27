import { container } from './styles/Start.css';
import InputForm from '../components/InputForm';
import CourseList from '../components/CourseList';

const Start = () => {
  return (
    <div className={container}>
      <InputForm />
      <CourseList />
    </div>
  );
};

export default Start;
