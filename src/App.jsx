import { Routes, Route } from 'react-router';
import Home from './pages/Home';
import Start from './pages/Start';
import Render from './pages/Render';
import Timetable from './pages/Timetable';

const App = () => {
  return (
    <Routes>
      <Route path="/vit-ffcs-planner/" element={<Home />} />
      <Route path="/vit-ffcs-planner/home" element={<Home />} />
      <Route path="/vit-ffcs-planner/start" element={<Start />} />
      <Route path="/vit-ffcs-planner/render" element={<Render />} />
      <Route path="/vit-ffcs-planner/timetable" element={<Timetable />} />
    </Routes>
  );
};

export default App;
