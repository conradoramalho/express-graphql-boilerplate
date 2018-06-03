import { GraphQLEnumType } from 'graphql';

export const sexEnumType = new GraphQLEnumType({
  name: 'sexEnumType',
  values: {
    male: {},
    female: {},
  },
});
