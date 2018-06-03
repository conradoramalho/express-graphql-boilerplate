import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
} from 'graphql';

import { GraphQLDate } from 'graphql-iso-date';
import { sexEnumType } from '../enums';

const userType = new GraphQLObjectType({
  name: 'User',
  description: 'User model',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    name: {
      type: GraphQLString,
    },
    lastName: {
      type: GraphQLString,
    },
    email: {
      type: GraphQLString,
    },
    cpf: {
      type: GraphQLString,
    },
    sex: {
      type: sexEnumType,
    },
    birthdate: {
      type: GraphQLDate,
    },
  },
});

const userInputType = new GraphQLInputObjectType({
  name: 'UserInput',
  description: 'Insert user',
  fields: {
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    lastName: {
      type: new GraphQLNonNull(GraphQLString),
    },
    password: {
      type: new GraphQLNonNull(GraphQLString),
    },
    cpf: {
      type: new GraphQLNonNull(GraphQLString),
    },
    sex: {
      type: new GraphQLNonNull(sexEnumType),
    },
    birthdate: {
      type: new GraphQLNonNull(GraphQLDate),
    },
    email: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
});

const userLoginType = new GraphQLInputObjectType({
  name: 'UserLogin',
  description: 'User Login',
  fields: {
    email: {
      type: new GraphQLNonNull(GraphQLString),
    },
    password: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
});

export { userType, userInputType, userLoginType };
