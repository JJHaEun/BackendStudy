import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// The GraphQL schema
// 아래 resolvers에 적어준것의 타입. => 이것을 토대로 바로  palyground에 docs로 만들어짐.
const myTypeDefs = `#graphql
  type Query {
    hello: Hello!
  }
  type Hello{
    name:String
    age:Int
  }
`;

// A map of functions which return data for the schema.
// rest-api는 "/"라는 등 주소가 있고, graphql은 주소는 없고 함수처럼 생김
// graphql은 Query또는 Mutation
const myResolvers = {
  // graphql에서는 api를 resolvers라고 부름
  Query: {
    hello: () => {
      return {
        name: "Bart",
        age: 10,
      };
    },
  },
  //   Mutation:{}
};

// 초기세팅
// resolvers는 뭐고 type이 뭔지 넣어주어야함.
const server = new ApolloServer({
  typeDefs: myTypeDefs,
  resolvers: myResolvers,
});

// const { url } = await startStandaloneServer(server);
// console.log(`🚀 Server ready at ${url}`); // 이렇게 포트번호 설정을 해주지 않았을 경우, 기본 포트번호 3000번이 나옴
const port = 3001;
const { url } = await startStandaloneServer(server, {
  listen: { port },
});

console.log(`🚀  Server ready at: ${url} on port ${port}`);
