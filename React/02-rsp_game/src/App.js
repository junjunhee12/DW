import reset from "./assets/ic-reset.svg";
import "./HandIcon.css";
import HandIcon from "./handIcon";
import HandButton from "./HandButton";

function App() {
  const handleButtonClick = (e) => {
    alert("dd");
  };
  return (
    <div>
      <h1>가위바위보 게임</h1>
      <img src={reset} alt="초기화" />
      <div className="App-scores">
        <div>
          <div>0</div>
          <div>나</div>
        </div>
        <div>:</div>
        <div>
          <div>0</div>
          <div>상대</div>
        </div>
      </div>
      <div className="Box-App-box">
        <div className="Box-inner">
          {/* 가위바위보 내는 곳 */}
          <div>
            <div className="Hand">
              <HandIcon value="rock" className="Hand-icon" />
            </div>
            <div>VS</div>
            <div className="Hand">
              <HandIcon value="paper" className="Hand-icon" />
            </div>
          </div>
          {/* 배점 */}
          <div>
            <span>배점</span>
            <input type="number" min={1} max={9} />
            <span>배</span>
          </div>
          {/* 기록할 부분 */}
          <div>
            <h2>승부기록</h2>
            <p></p>
          </div>
        </div>
      </div>
      <div>
        <HandButton onClick={handleButtonClick} value="rock" />
        <HandButton onClick={handleButtonClick} value="scissor" />
        <HandButton onClick={handleButtonClick} value="paper" />
      </div>
    </div>
  );
}

export default App;
