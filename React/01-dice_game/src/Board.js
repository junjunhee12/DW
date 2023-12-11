import Dice from "./dice";
import "./Board.css";

function Board({ name, color, gameHistory }) {
  // let sum = 0;
  // for (let i = 0; i < gameHistory.length; i++) {
  //   sum += gameHistory[i];
  // }
  // gameHistory.forEach((element) => {
  //   sum += element;
  // });\

  // 뒤에 슛자는 초기값이다. 숫자가 없으면 배열의 0번째 - a , 첫번째 - b -> 초기값 없을 때
  // a = 0, b = 0번째 - 초기값 있을 때
  // a: 0 b:[0]
  // a: 0 + [0] b:[1]
  // a: 0 + [0] + [1] b:[2]
  // a: 0 + [0] + [1] + [2] b:[3]
  // a: 0 + [0] + [1] + [2] +[3] b:[4]
  // a: 0 + [0] + [1] + [2] +[3] + [4]
  const sum = gameHistory.reduce((a, b) => a + b, 0);

  const num = gameHistory[gameHistory.length - 1];
  return (
    <div className="Board App-board">
      <h2 className="Board-heading">{name}</h2>
      <Dice color={color} num={num} />
      <h2 className="Board-heading">총점</h2>
      <p>{sum}</p>
      <h2 className="Board-heading">기록</h2>
      <p>{gameHistory.join(", ")}</p>
    </div>
  );
}

export default Board;
