export const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "나만의 미니프로젝트 API명세서",
      version: "1.0.0",
    },
  },
  apis: ["./swagger/*.swagger.js"], // api와 api-docs를 따로 관리할 때 그 docs파일이 어딘지..
  // 현위치의 swagger라는 폴더 내 .swagger.js로 끝나는 모든파일들
};
