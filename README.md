# BackendStudy

이전에는 import, export가 아니라 common.js방식을 사용했다.
따라서 최신 방식 import, export를 사용하기 위해서는 yarn init으로 package.json을 생성할 필요가 있다.
그리고 생성된 package.json에 `  "type": "module"`이것을 추가한다.
단, 반드시 import시에 확장자를 포함해 줘야한다. 포함하지 않아 Node를 실행할때 `code: 'ERR_MODULE_NOT_FOUND` 이러한 에러를 발생시켰다.
