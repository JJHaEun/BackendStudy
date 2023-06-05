import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// The GraphQL schema
// 아래 resolvers에 적어준것의 타입. => 이것을 토대로 바로  palyground에 docs로 만들어짐.
const typeDefs = `#graphql
  type Board{
    number:Int,
    writer:String,
    title:String,
    contents:String
  }
  # type CreateBoardInput{ 
  #   writer:String,
  #   title:String,
  #   contents:String,
  # }
  # 입력으로 받아오는 타입은 type으로 적으면 안됨!! 에러발생.
  # 반드시 type이 아니라 input이라고 해주어야함.
   input CreateBoardInput{ 
    writer:String,
    title:String,
    contents:String,
  }
  
  type Query {
   fetchBoards:[Board!]
  }
  type Mutation{
    createBoard1(writer:String, title:String, contents:String):String,
        
    createBoard(createBoardInput: CreateBoardInput!):Board!,
  }


  
`;

// graphql에서는 api를 resolvers라고 부름
// graphql은 Query또는 Mutation

// resolvers라는 객체안에 key/value형태로 들어있음.
// Query나 Mutation이라는 키 안에 객체, 그리고 그 안에 또 key/value
const resolvers = {
  Query: {
    fetchBoards: () => {
      // 1. 데이터를 조회하는 로직 => DB에 접속하여 데이터 꺼내오기

      // 2. 저장결과 응답주기
      const result = [
        {
          number: 1,
          writer: "바트",
          title: "title...stupid...",
          contents: "what's the problem",
        },
        {
          number: 2,
          writer: "리사",
          title: "title...stupid...title..stupid Bart",
          contents: "what's the problem",
        },
        {
          number: 3,
          writer: "메기",
          title: "title...stupid...",
          contents: "what's the problem",
        },
      ];
      return result;
    },
  },
  Mutation: {
    createBoard1: (_, args, context, info) => {
      // 프론트로부터 받는 데이터는 arg에 들어옴.(args.writer이런식으로 받음.)
      // parent의 경우에는 api에서 api를 호출할 수 있는데 그때들어가는 곳
      // 1. 데이터를 등록하는 로직 =>DB에 접속해 데이터 저장하기(프론트에서 입력한 데이터를 저장.)
      console.log(args);

      // 2. 저장결과 응답주기
      return "등록에 성공하였습니다!!";
    },

    createBoard: (_, args) => {
      // 프론트로부터 받는 데이터는 arg에 들어옴.(args.writer이런식으로 받음.)
      // parent의 경우에는 api에서 api를 호출할 수 있는데 그때들어가는 곳
      // 1. 데이터를 등록하는 로직 =>DB에 접속해 데이터 저장하기(프론트에서 입력한 데이터를 저장.)
      console.log(args, "args입");

      // 2. 저장결과 응답주기
      return {
        number: args.createBoardInput.number,
        writer: args.createBoardInput.writer,
        title: args.createBoardInput.title,
        contents: args.createBoardInput.contents,
      };
    },
  },
};

// 초기세팅
// resolvers는 뭐고 type이 뭔지 넣어주어야함.
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// const { url } = await startStandaloneServer(server);
// console.log(`🚀 Server ready at ${url}`); // 이렇게 포트번호 설정을 해주지 않았을 경우, 기본 포트번호 3000번이 나옴
const port = 3001;
const { url } = await startStandaloneServer(server, {
  listen: { port },
});

console.log(`🚀  Server ready at: ${url} on port ${port}`);
