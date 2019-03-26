// Code generated by Prisma (prisma@1.29.1). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export interface Exists {
  alarm: (where?: AlarmWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  alarm: (where: AlarmWhereUniqueInput) => AlarmPromise;
  alarms: (
    args?: {
      where?: AlarmWhereInput;
      orderBy?: AlarmOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<Alarm>;
  alarmsConnection: (
    args?: {
      where?: AlarmWhereInput;
      orderBy?: AlarmOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => AlarmConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createAlarm: (data: AlarmCreateInput) => AlarmPromise;
  updateAlarm: (
    args: { data: AlarmUpdateInput; where: AlarmWhereUniqueInput }
  ) => AlarmPromise;
  updateManyAlarms: (
    args: { data: AlarmUpdateManyMutationInput; where?: AlarmWhereInput }
  ) => BatchPayloadPromise;
  upsertAlarm: (
    args: {
      where: AlarmWhereUniqueInput;
      create: AlarmCreateInput;
      update: AlarmUpdateInput;
    }
  ) => AlarmPromise;
  deleteAlarm: (where: AlarmWhereUniqueInput) => AlarmPromise;
  deleteManyAlarms: (where?: AlarmWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  alarm: (
    where?: AlarmSubscriptionWhereInput
  ) => AlarmSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type AlarmOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "intId_ASC"
  | "intId_DESC"
  | "text_ASC"
  | "text_DESC"
  | "upvotes_ASC"
  | "upvotes_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface AlarmCreateInput {
  intId: Int;
  text?: String;
  upvotes?: Int;
}

export interface AlarmUpdateInput {
  intId?: Int;
  text?: String;
  upvotes?: Int;
}

export interface AlarmWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  intId?: Int;
  intId_not?: Int;
  intId_in?: Int[] | Int;
  intId_not_in?: Int[] | Int;
  intId_lt?: Int;
  intId_lte?: Int;
  intId_gt?: Int;
  intId_gte?: Int;
  text?: String;
  text_not?: String;
  text_in?: String[] | String;
  text_not_in?: String[] | String;
  text_lt?: String;
  text_lte?: String;
  text_gt?: String;
  text_gte?: String;
  text_contains?: String;
  text_not_contains?: String;
  text_starts_with?: String;
  text_not_starts_with?: String;
  text_ends_with?: String;
  text_not_ends_with?: String;
  upvotes?: Int;
  upvotes_not?: Int;
  upvotes_in?: Int[] | Int;
  upvotes_not_in?: Int[] | Int;
  upvotes_lt?: Int;
  upvotes_lte?: Int;
  upvotes_gt?: Int;
  upvotes_gte?: Int;
  AND?: AlarmWhereInput[] | AlarmWhereInput;
  OR?: AlarmWhereInput[] | AlarmWhereInput;
  NOT?: AlarmWhereInput[] | AlarmWhereInput;
}

export interface AlarmUpdateManyMutationInput {
  intId?: Int;
  text?: String;
  upvotes?: Int;
}

export interface AlarmSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: AlarmWhereInput;
  AND?: AlarmSubscriptionWhereInput[] | AlarmSubscriptionWhereInput;
  OR?: AlarmSubscriptionWhereInput[] | AlarmSubscriptionWhereInput;
  NOT?: AlarmSubscriptionWhereInput[] | AlarmSubscriptionWhereInput;
}

export type AlarmWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
  intId?: Int;
}>;

export interface NodeNode {
  id: ID_Output;
}

export interface AggregateAlarm {
  count: Int;
}

export interface AggregateAlarmPromise
  extends Promise<AggregateAlarm>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateAlarmSubscription
  extends Promise<AsyncIterator<AggregateAlarm>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface AlarmPreviousValues {
  id: ID_Output;
  intId: Int;
  text?: String;
  upvotes?: Int;
}

export interface AlarmPreviousValuesPromise
  extends Promise<AlarmPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  intId: () => Promise<Int>;
  text: () => Promise<String>;
  upvotes: () => Promise<Int>;
}

export interface AlarmPreviousValuesSubscription
  extends Promise<AsyncIterator<AlarmPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  intId: () => Promise<AsyncIterator<Int>>;
  text: () => Promise<AsyncIterator<String>>;
  upvotes: () => Promise<AsyncIterator<Int>>;
}

export interface AlarmEdge {
  node: Alarm;
  cursor: String;
}

export interface AlarmEdgePromise extends Promise<AlarmEdge>, Fragmentable {
  node: <T = AlarmPromise>() => T;
  cursor: () => Promise<String>;
}

export interface AlarmEdgeSubscription
  extends Promise<AsyncIterator<AlarmEdge>>,
    Fragmentable {
  node: <T = AlarmSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AlarmSubscriptionPayload {
  mutation: MutationType;
  node: Alarm;
  updatedFields: String[];
  previousValues: AlarmPreviousValues;
}

export interface AlarmSubscriptionPayloadPromise
  extends Promise<AlarmSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = AlarmPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = AlarmPreviousValuesPromise>() => T;
}

export interface AlarmSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<AlarmSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = AlarmSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = AlarmPreviousValuesSubscription>() => T;
}

export interface Alarm {
  id: ID_Output;
  intId: Int;
  text?: String;
  upvotes?: Int;
}

export interface AlarmPromise extends Promise<Alarm>, Fragmentable {
  id: () => Promise<ID_Output>;
  intId: () => Promise<Int>;
  text: () => Promise<String>;
  upvotes: () => Promise<Int>;
}

export interface AlarmSubscription
  extends Promise<AsyncIterator<Alarm>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  intId: () => Promise<AsyncIterator<Int>>;
  text: () => Promise<AsyncIterator<String>>;
  upvotes: () => Promise<AsyncIterator<Int>>;
}

export interface AlarmConnection {
  pageInfo: PageInfo;
  edges: AlarmEdge[];
}

export interface AlarmConnectionPromise
  extends Promise<AlarmConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<AlarmEdge>>() => T;
  aggregate: <T = AggregateAlarmPromise>() => T;
}

export interface AlarmConnectionSubscription
  extends Promise<AsyncIterator<AlarmConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<AlarmEdgeSubscription>>>() => T;
  aggregate: <T = AggregateAlarmSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

export type Long = string;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "Alarm",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const Prisma = makePrismaClientClass<ClientConstructor<Prisma>>({
  typeDefs,
  models,
  endpoint: `http://localhost:4466`
});
export const prisma = new Prisma();
