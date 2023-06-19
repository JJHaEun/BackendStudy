# BackendStudy

이전에는 import, export가 아니라 common.js방식을 사용했다.
따라서 최신 방식 import, export를 사용하기 위해서는 yarn init으로 package.json을 생성할 필요가 있다.
그리고 생성된 package.json에 `  "type": "module"`이것을 추가한다.
단, 반드시 import시에 확장자를 포함해 줘야한다. 포함하지 않아 Node를 실행할때 `code: 'ERR_MODULE_NOT_FOUND` 이러한 에러를 발생시켰다.

---

#### GraphQL 에서 타입 주의사항

- 벡엔드에서 보내주는것의 타입은 `type`이라고 작성.
- 프론트에서 받아오는 타입은 절대 `type`이라고 작성하면 안되고(에러발생.), `input`이라고 작성해야한다.

>

#### 틀린 예

```js
   type CreateBoardInput{
     writer:String,
     title:String,
     contents:String,
   }
```

---

#### **바른 예**

```js
 input CreateBoardInput{
     writer:String,
     title:String,
     contents:String,
}
```

### 크롤링이 가능한지 불능한지 보는 법!!

특정 사이트 주소의 뒷부분에 robots.txt를 넣어주면 Allow와 Disallow를 볼 수 있다.
(크롤링등을 하는 프로그램을 robot이라고 부른다.)
Disallow라고 하더라도 크롤링을 못하는것은 아니지만 가급적 하지 말라고 하는것이다.
Allow라고 해서 해당 서버에 부하를 주거나, 영리목적으로 사용하면 안된다.
