import mongoose from "mongoose";

// 컬렉션에 들어갈 데이터 구조
const BoardSchema = new mongoose.Schema({
  writer: String,
  title: String,
  contents: String,
});

// schema를 사용해 모델 만들기(즉, 구조를 등록해 컬렉션을 만들기)
export const Board = mongoose.model("Board", BoardSchema);
// Board라는 이름의 모델을 만들고 , 해당 스키마는 BoardSchema이다.
