// import "./App.css";

import { getDatas } from "../firebase.js";
import mockItems from "../mock.json";
import Reviewlist from "./Reviewlist.js";
import { useState } from "react";

function App() {
  // console.log(items);
  const [items, setItems] = useState([]);
  const [order, setOrder] = useState("createdAt");

  // sort 함수에 아무런 arguments(전달인자)도 전달하지 않을 때는 기본적으로 유니코드에 정의된무자열 순서에 따라 정렬된다.
  // ==> compareFunction가 생략될 경우, 배열의 모든 요소들은 문자열 취급되며, 유니코드 값 순서대로 정렬된다는 의미이다.
  // 그렇게 때문에 숫자를 정렬할 때 우리가 상식적으로 이해하는 오름차순이나 내침차순 정렬이 되지 않는다.
  //반환값 < 0 : a 보다 앞에 있어야 한다.
  //반환값 == 0 : a와 b의 순서를 바꾸지 않는다.
  // 반환값 > 0 : b가 a보다 앞에 있어야 한다.
  // a-b : 오름차순, b-a : 내림차순

  const sortedItems = items.sort((a, b) => b[order] - a[order]);

  const handleNewestClick = () => {
    // setItems(sortedItems);
    setOrder("createdAt");
  };

  const handleBestClick = () => {
    setOrder("rating");
  };

  const handleDelete = (id) => {
    // items에서 id 파라미터와 같은 id를 가지는 요소 제거
    // 필터함수 filter - > 새로운 배열을 준다.( retrun 옆에 조건을 준다)
    const nextItems = items.filter((item) => item.id !== id);
    setItems(nextItems);
  };

  const handleLoadClick = async () => {
    const { reviews } = await getDatas("movie");
  };
  return (
    <div>
      <div>
        <button onClick={handleNewestClick}>최신순</button>
        <button onClick={handleBestClick}>베스트 순</button>
      </div>
      <Reviewlist items={sortedItems} onDelete={handleDelete} />
      <button onClick={handleLoadClick}>불러오기</button>
    </div>
  );
}

export default App;
