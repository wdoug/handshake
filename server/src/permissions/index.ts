import { rule, shield } from 'graphql-shield';
import { getUserId } from '../utils';

const rules = {};

export const permissions = shield({
  Query: {},
  Mutation: {},
});
