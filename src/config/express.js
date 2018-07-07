import express from 'express';
// import graphqlHTTP from 'express-graphql';
import schema from '../graphql';
console.log('schema: ', schema);

const startExpress = () => {
  const app = express();

  // app.use(
  //   '/graphql',
  //   graphqlHTTP(req => ({
  //     schema,
  //     graphiql: true,
  //     pretty: true,
  //   }))
  // );

  app.listen(3010, () =>
    console.log('Server -> http://localhost:3010/graphql')
  );
};

export default startExpress;
