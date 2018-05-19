import express from "express";
import graphqlHTTP from "express-graphql";
import cors from "cors";
import schema from "../graphql";
import { userResolver } from "./auth";

const startExpress = () => {
  const app = express();

  app.use(cors("*"));
  app.use(userResolver);

  app.use(
    "/graphql",
    graphqlHTTP(req => ({
      schema,
      graphiql: true,
      pretty: true
    }))
  );

  app.listen(3010, () =>
    console.log("Server -> http://localhost:3010/graphql")
  );
};

export default startExpress;
