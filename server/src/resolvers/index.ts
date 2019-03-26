import { Query } from './Query';
import { Alarm } from './Alarm';
import { feedAlarms } from './Subscription';
import { Mutation } from './Mutation';

export const resolvers = {
  Query,
  Alarm,
  Mutation,
  feedAlarms,
};
