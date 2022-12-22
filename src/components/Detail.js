const Detail = (props) => {
  return (
    <div className="modal" style={{ background: props.color }}>
      <h4>{props.title[props.titles]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button
        onClick={() => {
          props.setTitle([
            "골든구스 가방 추천",
            "JJ 가방 추천",
            "아디다스 신발 추천",
          ]);
        }}
      >
        글수정
      </button>
    </div>
  );
};
export default Detail;
