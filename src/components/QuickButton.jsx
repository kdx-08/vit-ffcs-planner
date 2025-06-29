import { useState } from 'react';
import { button_c, button } from './styles/QuickViz.css';

const QuickButton = ({ value, setActiveList }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <button
      className={isActive ? button_c : button}
      onClick={() => {
        setActiveList(
          !isActive
            ? (oldList) => [...oldList, value]
            : (oldList) => oldList.filter((v) => v !== value)
        );
        setIsActive(!isActive);
      }}
    >
      {value}
    </button>
  );
};

export default QuickButton;
