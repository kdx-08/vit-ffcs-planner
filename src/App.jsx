import { Routes, Route } from 'react-router';
import Home from './pages/Home';
import Start from './pages/Start';
import Render from './pages/Render';
import { themeClass } from './style.css';

const App = () => {
  return (
    <div className={themeClass}>
      <Routes>
        <Route path="/vit-ffcs-planner/" element={<Home />} />
        <Route path="/vit-ffcs-planner/home" element={<Home />} />
        <Route path="/vit-ffcs-planner/start" element={<Start />} />
        <Route path="/vit-ffcs-planner/render" element={<Render />} />
      </Routes>
    </div>
  );
};

export default App;
