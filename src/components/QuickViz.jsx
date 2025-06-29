import QuickButton from './QuickButton';
import { container, row, row_h, groupContainer } from './styles/QuickViz.css';

const QuickViz = ({ setActiveList }) => {
  return (
    <div>
      <div className={row_h}>Quick Visualization</div>
      <div className={groupContainer}>
        <div className={container}>
          <div className={row}>
            <QuickButton value="A1" setActiveList={setActiveList} />
            <QuickButton value="B1" setActiveList={setActiveList} />
            <QuickButton value="C1" setActiveList={setActiveList} />
            <QuickButton value="D1" setActiveList={setActiveList} />
            <QuickButton value="E1" setActiveList={setActiveList} />
            <QuickButton value="F1" setActiveList={setActiveList} />
            <QuickButton value="G1" setActiveList={setActiveList} />
            <QuickButton value="S11" setActiveList={setActiveList} />
            <QuickButton value="S15" setActiveList={setActiveList} />
          </div>
          <div className={row}>
            <QuickButton value="TA1" setActiveList={setActiveList} />
            <QuickButton value="TB1" setActiveList={setActiveList} />
            <QuickButton value="TC1" setActiveList={setActiveList} />
            <QuickButton value="TD1" setActiveList={setActiveList} />
            <QuickButton value="TE1" setActiveList={setActiveList} />
            <QuickButton value="TF1" setActiveList={setActiveList} />
            <QuickButton value="TG1" setActiveList={setActiveList} />
          </div>
          <div className={row}>
            <QuickButton value="TAA1" setActiveList={setActiveList} />
            <QuickButton value="TBB1" setActiveList={setActiveList} />
            <QuickButton value="TCC1" setActiveList={setActiveList} />
            <QuickButton value="TDD1" setActiveList={setActiveList} />
          </div>
        </div>
        <div className={container}>
          <div className={row}>
            <QuickButton value="A2" setActiveList={setActiveList} />
            <QuickButton value="B2" setActiveList={setActiveList} />
            <QuickButton value="C2" setActiveList={setActiveList} />
            <QuickButton value="D2" setActiveList={setActiveList} />
            <QuickButton value="E2" setActiveList={setActiveList} />
            <QuickButton value="F2" setActiveList={setActiveList} />
            <QuickButton value="G2" setActiveList={setActiveList} />
            <QuickButton value="S3" setActiveList={setActiveList} />
            <QuickButton value="S1" setActiveList={setActiveList} />
            <QuickButton value="S4" setActiveList={setActiveList} />
            <QuickButton value="S2" setActiveList={setActiveList} />
          </div>
          <div className={row}>
            <QuickButton value="TA2" setActiveList={setActiveList} />
            <QuickButton value="TB2" setActiveList={setActiveList} />
            <QuickButton value="TC2" setActiveList={setActiveList} />
            <QuickButton value="TD2" setActiveList={setActiveList} />
            <QuickButton value="TE2" setActiveList={setActiveList} />
            <QuickButton value="TF2" setActiveList={setActiveList} />
            <QuickButton value="TG2" setActiveList={setActiveList} />
          </div>
          <div className={row}>
            <QuickButton value="TAA2" setActiveList={setActiveList} />
            <QuickButton value="TBB2" setActiveList={setActiveList} />
            <QuickButton value="TCC2" setActiveList={setActiveList} />
            <QuickButton value="TDD2" setActiveList={setActiveList} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViz;
