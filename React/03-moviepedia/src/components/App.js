// import "./App.css";

import { getDatas } from "../firebase.js";
import ReviewForm from "./ReviewForm.js";
// import mockItems from "../mock.json";
import Reviewlist from "./Reviewlist.js";
import { useEffect, useState } from "react";
import "./ReviewForm.css";
const LIMIT = 5;
function App() {
  // console.log(items);
  const [items, setItems] = useState([]);
  const [order, setOrder] = useState("createdAt");
  const [lq, setLq] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [loadingError, setLoadingError] = useState(null);
  const [hasNext, setHasNext] = useState(false);

  // sort 함수에 아무런 arguments(전달인자)도 전달하지 않을 때는 기본적으로 유니코드에 정의된무자열 순서에 따라 정렬된다.
  // ==> compareFunction가 생략될 경우, 배열의 모든 요소들은 문자열 취급되며, 유니코드 값 순서대로 정렬된다는 의미이다.
  // 그렇게 때문에 숫자를 정렬할 때 우리가 상식적으로 이해하는 오름차순이나 내침차순 정렬이 되지 않는다.
  //반환값 < 0 : a 보다 앞에 있어야 한다.
  //반환값 == 0 : a와 b의 순서를 바꾸지 않는다.
  // 반환값 > 0 : b가 a보다 앞에 있어야 한다.
  // a-b : 오름차순, b-a : 내림차순

  // const sortedItems = items.sort((a, b) => b[order] - a[order]);

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

  const handleLoad = async (options) => {
    let result;
    try {
      setIsLoading(true);
      setLoadingError(null);
      result = await getDatas("movie", options);
    } catch (error) {
      // try에 오류나면 실행
      console.error(error);
      setLoadingError(error);
      return;
    } finally {
      // 마지막에 무조건 실행되는 부분
      setIsLoading(false);
    }
    const { reviews, lastQuery } = result;
    if (options.lq === undefined) {
      setItems(reviews);
    } else {
      setItems((prevItems) => [...prevItems, ...reviews]);
    }
    setHasNext(lastQuery);
    setLq(lastQuery);
    console.log(reviews);
  };

  const handleLoadMore = () => {
    handleLoad({ order, lq, limit: LIMIT });
  };
  // 랜더링을 최초로 한번만하게 해주기위해?
  // useEffext는 arguments 로 콜백함수와 배열을 넘겨준다.
  // []은 dependency list 라고 하는데 위엣서 handleLoad 함수가 무한루프 작동을 하기떄문에 처리를 해줘야 하는데
  // 리액트는 [] 안에 있는 값들을 앞에서 기억한 값이랑 비교한다.
  //  비교해서 다른 경우에만 콜백함수를 실행한다. (그전에는 콜백함수를 등록만 해놓음)
  useEffect(() => {
    handleLoad({ order, lq: undefined, limit: LIMIT });
  }, [order]);

  return (
    <div>
      {hasNext && (
        <button disabled={isLoading} onClick={handleLoadMore}>
          더 보기
        </button>
      )}
      <div>
        <button onClick={handleNewestClick}>최신순</button>
        <button onClick={handleBestClick}>베스트 순</button>
      </div>
      <ReviewForm />
      <Reviewlist items={items} onDelete={handleDelete} />
      {
        // 에러가 있을 시 나타낼 요소, 텍스트들을 출력
        // AND : 앞에 나오는 값이 true 이면 랜더링
        // OR : 앞에 나오는 값이 false 이면 랜더링
        // loadingError 가있으면 .message를 참조
        // truthy falsy한 값들이 있다.
        // falsy ==> null, NaN, 0, 빈 문자열, undefined
        loadingError !== null ? <span>{loadingError.message}</span> : ""
        // loadingError?.message && <span>{loadingError.message}</span>
      }
      {/* <button onClick={handleLoadClick}>불러오기</button> */}
    </div>
  );
}

export default App;
