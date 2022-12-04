/*eslint-disable*/ // 경고문구를 지워주는 것이다

import { useState } from "react";
import "./App.css";

function App() {
  let [글제목1, a] = useState("골든 구스 추천");
  let [글제목2, b] = useState("에르메스 가방 추천");
  let [글제목3, c] = useState("샤넬 가방 추천");
  /*
  State는 변동시 자동으로 html에 반영되게 만들고 싶으면 사용(자주변경될꺼같은 것들만 작성한다)
  사이트의 로고 같은 경우에는 변경될일 없기때문에 state로 할 필요는 없다
  */
  let [글제목] = useState([
    "프라다 가방 추천",
    "TIME 가방 추천",
    "나이키 신발 추천",
  ]);
  //Array로 state 값을 뽑기
  return (
    <div className="App">
      <div className="Black-nav">
        <h4 style={{ color: "red", fontSize: "20px" }}>브랜드 블로그</h4>
      </div>
      <div className="list">
        <h4>{글제목1}</h4>
        <p>11월 30일</p>
      </div>
      <div className="list">
        <h4>{글제목2}</h4>
        <p>11월 30일</p>
      </div>
      <div className="list">
        <h4>{글제목3}</h4>
        <p>11월 30일</p>
      </div>
      <div className="list">
        <h4>{글제목[0]}</h4>
        <p>11월 30일</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>11월 30일</p>
      </div>
      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>11월 30일</p>
      </div>
    </div>
  );
}

export default App;
