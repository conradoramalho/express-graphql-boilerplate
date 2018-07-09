import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from '../graphql';
import env from '../environment';

const startExpress = () => {
  const app = express();

  app.use(
    '/graphql',
    graphqlHTTP(req => ({
      schema,
      graphiql: true,
      pretty: true,
    }))
  );

  app.listen(env.PORT, () =>
    console.log(`Server -> http://localhost:${env.PORT}/graphql`)
  );
};

export default startExpress;
