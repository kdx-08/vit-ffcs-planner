import Navbar from '../components/Navbar';
import Timetable from '../components/Timetable';
import { section, sechead, secbody } from './styles/Section.css';

const Render = () => {
  return (
    <div className={section}>
      <Navbar />
      <div className={secbody}>
        <p className={sechead}>Timetable</p>
        <Timetable />
      </div>
    </div>
  );
};

export default Render;
