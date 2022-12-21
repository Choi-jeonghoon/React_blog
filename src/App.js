/*eslint-disable*/ // 경고문구를 지워주는 것이다

import { useState } from "react";
import "./App.css";
import Detail from "../src/components/Detail.js";

function App() {
  // let [Title1, a] = useState("골든 구스 추천");
  // let [Title2, b] = useState("에르메스 가방 추천");
  // let [Title3, c] = useState("샤넬 가방 추천");
  /*
  State는 변동시 자동으로 html에 반영되게 만들고 싶으면 사용(자주변경될꺼같은 것들만 작성한다)
  사이트의 로고 같은 경우에는 변경될일 없기때문에 state로 할 필요는 없다
  */
  const [title, setTitle] = useState([
    "프라다 가방 추천",
    "TIME 가방 추천",
    "나이키 신발 추천",
  ]);
  //Array로 state 값을 뽑기
  const [좋아요, e] = useState(0);
  const [like, setLike] = useState([0, 0, 0]);
  const [detail, setDetail] = useState(false);

  return (
    <div className="App">
      <div className="Black-nav">
        <h4 style={{ color: "red", fontSize: "20px" }}>Brand Blog</h4>
      </div>
      <button
        onClick={() => {
          let copy = [...title];
          copy.sort();
          setTitle(copy);
        }}
      >
        정렬
      </button>
      <button
        onClick={() => {
          let copy = [...title];
          copy[0] = "샤넬가방 추천";
          setTitle(copy);
        }}
      >
        글수정
      </button>
      {/* <div className="list">
        <h4>{title1}</h4>
        <p>11월 30일</p>
      </div>
      <div className="list">
        <h4>{title2}</h4>
        <p>11월 30일</p>
      </div>
      <div className="list">
        <h4>{title3}</h4>
        <p>11월 30일</p>
      </div> */}

      {/* <div className="list">
        <h4>
          {title[0]}
          <span
            onClick={() => {
              e(좋아요 + 1);
            }}
          >
            👍
          </span>
          {좋아요}
        </h4>
        <p>11월 30일</p>
      </div>
      <div className="list" style={{ cursor: "pointer" }}>
        <h4>{title[1]}</h4>
        <p>11월 29일</p>
      </div>
      <div className="list" style={{ cursor: "pointer" }}>
        <h4 style={{ cursor: "pointer" }} onClick={() => setDetail(!detail)}>
          {title[2]}
        </h4>
        <p>11월 30일</p>
      </div> */}

      {title.map(function (titleName, i) {
        return (
          <div className="list" key={i}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <h4
                style={{ cursor: "pointer" }}
                onClick={() => setDetail(!detail)}
              >
                {titleName}
              </h4>
              <span
                onClick={() => {
                  let copy = [...like];
                  copy[i]++;
                  setLike(copy);
                }}
              >
                👍
                {like[i]}
              </span>
            </div>
            {/* <h4>{title[i]} </h4> */}
            {/* 
            function에 파라미터는 2개까지 작명이 가능함 반복문이 돌떄마다 0부터 1씩 증가하는 정수이다. 위와같은 방식으로 작성이 가능하다
            */}
            <p>2월 10일</p>
          </div>
        );
      })}

      {detail == true ? <Detail /> : null}
      {/* if문은 리엑트상에서 작동하지않기때문에 삼향연산자로 작성해서 쓴다 위와 같은모습으로
      위의 있는 코드는 detail state의 값이 참이면 Detail컴포넌트를 보여주고 그게아니면 보여주지 않는다는 의미의 code */}
    </div>
  );
}

export default App;
