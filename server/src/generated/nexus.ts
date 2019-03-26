/**
 * This file was automatically generated by Nexus 0.11.5
 * Do not make changes to this file directly
 */

import * as types from "../types"


declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  AlarmCreateInput: { // input type
    intId: number; // Int!
    text?: string | null; // String
  }
  AlarmUpdateInput: { // input type
    intId?: number | null; // Int
    text?: string | null; // String
  }
  AlarmUpdateManyMutationInput: { // input type
    intId?: number | null; // Int
    text?: string | null; // String
  }
  AlarmWhereInput: { // input type
    AND?: NexusGenInputs['AlarmWhereInput'][] | null; // [AlarmWhereInput!]
    id?: string | null; // ID
    id_contains?: string | null; // ID
    id_ends_with?: string | null; // ID
    id_gt?: string | null; // ID
    id_gte?: string | null; // ID
    id_in?: string[] | null; // [ID!]
    id_lt?: string | null; // ID
    id_lte?: string | null; // ID
    id_not?: string | null; // ID
    id_not_contains?: string | null; // ID
    id_not_ends_with?: string | null; // ID
    id_not_in?: string[] | null; // [ID!]
    id_not_starts_with?: string | null; // ID
    id_starts_with?: string | null; // ID
    intId?: number | null; // Int
    intId_gt?: number | null; // Int
    intId_gte?: number | null; // Int
    intId_in?: number[] | null; // [Int!]
    intId_lt?: number | null; // Int
    intId_lte?: number | null; // Int
    intId_not?: number | null; // Int
    intId_not_in?: number[] | null; // [Int!]
    NOT?: NexusGenInputs['AlarmWhereInput'][] | null; // [AlarmWhereInput!]
    OR?: NexusGenInputs['AlarmWhereInput'][] | null; // [AlarmWhereInput!]
    text?: string | null; // String
    text_contains?: string | null; // String
    text_ends_with?: string | null; // String
    text_gt?: string | null; // String
    text_gte?: string | null; // String
    text_in?: string[] | null; // [String!]
    text_lt?: string | null; // String
    text_lte?: string | null; // String
    text_not?: string | null; // String
    text_not_contains?: string | null; // String
    text_not_ends_with?: string | null; // String
    text_not_in?: string[] | null; // [String!]
    text_not_starts_with?: string | null; // String
    text_starts_with?: string | null; // String
  }
  AlarmWhereUniqueInput: { // input type
    id?: string | null; // ID
    intId?: number | null; // Int
  }
}

export interface NexusGenEnums {
  AlarmOrderByInput: "createdAt_ASC" | "createdAt_DESC" | "id_ASC" | "id_DESC" | "intId_ASC" | "intId_DESC" | "text_ASC" | "text_DESC" | "updatedAt_ASC" | "updatedAt_DESC"
}

export interface NexusGenRootTypes {
  AggregateAlarm: { // root type
    count: number; // Int!
  }
  Alarm: { // root type
    id: string; // ID!
    intId: number; // Int!
    text?: string | null; // String
  }
  AlarmConnection: { // root type
    edges: NexusGenRootTypes['AlarmEdge'][]; // [AlarmEdge!]!
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  AlarmEdge: { // root type
    cursor: string; // String!
    node: NexusGenRootTypes['Alarm']; // Alarm!
  }
  BatchPayload: { // root type
    count: any; // Long!
  }
  Mutation: {};
  PageInfo: { // root type
    endCursor?: string | null; // String
    hasNextPage: boolean; // Boolean!
    hasPreviousPage: boolean; // Boolean!
    startCursor?: string | null; // String
  }
  Query: {};
  String: string;
  Int: number;
  Float: number;
  Boolean: boolean;
  ID: string;
  Long: any;
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  AlarmCreateInput: NexusGenInputs['AlarmCreateInput'];
  AlarmUpdateInput: NexusGenInputs['AlarmUpdateInput'];
  AlarmUpdateManyMutationInput: NexusGenInputs['AlarmUpdateManyMutationInput'];
  AlarmWhereInput: NexusGenInputs['AlarmWhereInput'];
  AlarmWhereUniqueInput: NexusGenInputs['AlarmWhereUniqueInput'];
  AlarmOrderByInput: NexusGenEnums['AlarmOrderByInput'];
}

export interface NexusGenFieldTypes {
  AggregateAlarm: { // field return type
    count: number; // Int!
  }
  Alarm: { // field return type
    id: string; // ID!
    intId: number; // Int!
    text: string | null; // String
  }
  AlarmConnection: { // field return type
    aggregate: NexusGenRootTypes['AggregateAlarm']; // AggregateAlarm!
    edges: NexusGenRootTypes['AlarmEdge'][]; // [AlarmEdge!]!
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  AlarmEdge: { // field return type
    cursor: string; // String!
    node: NexusGenRootTypes['Alarm']; // Alarm!
  }
  BatchPayload: { // field return type
    count: any; // Long!
  }
  Mutation: { // field return type
    createAlarm: NexusGenRootTypes['Alarm'] | null; // Alarm
    deleteAlarm: NexusGenRootTypes['Alarm'] | null; // Alarm
    deleteManyAlarms: NexusGenRootTypes['BatchPayload']; // BatchPayload!
    updateAlarm: NexusGenRootTypes['Alarm'] | null; // Alarm
    updateManyAlarms: NexusGenRootTypes['BatchPayload']; // BatchPayload!
    upsertAlarm: NexusGenRootTypes['Alarm']; // Alarm!
  }
  PageInfo: { // field return type
    endCursor: string | null; // String
    hasNextPage: boolean; // Boolean!
    hasPreviousPage: boolean; // Boolean!
    startCursor: string | null; // String
  }
  Query: { // field return type
    alarm: NexusGenRootTypes['Alarm'] | null; // Alarm
    alarms: NexusGenRootTypes['Alarm'][]; // [Alarm!]!
    alarmsConnection: NexusGenRootTypes['AlarmConnection']; // AlarmConnection!
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createAlarm: { // args
      text?: string | null; // String
    }
    deleteAlarm: { // args
      where: NexusGenInputs['AlarmWhereUniqueInput']; // AlarmWhereUniqueInput!
    }
    deleteManyAlarms: { // args
      where?: NexusGenInputs['AlarmWhereInput'] | null; // AlarmWhereInput
    }
    updateAlarm: { // args
      data: NexusGenInputs['AlarmUpdateInput']; // AlarmUpdateInput!
      where: NexusGenInputs['AlarmWhereUniqueInput']; // AlarmWhereUniqueInput!
    }
    updateManyAlarms: { // args
      data: NexusGenInputs['AlarmUpdateManyMutationInput']; // AlarmUpdateManyMutationInput!
      where?: NexusGenInputs['AlarmWhereInput'] | null; // AlarmWhereInput
    }
    upsertAlarm: { // args
      create: NexusGenInputs['AlarmCreateInput']; // AlarmCreateInput!
      update: NexusGenInputs['AlarmUpdateInput']; // AlarmUpdateInput!
      where: NexusGenInputs['AlarmWhereUniqueInput']; // AlarmWhereUniqueInput!
    }
  }
  Query: {
    alarm: { // args
      where: NexusGenInputs['AlarmWhereUniqueInput']; // AlarmWhereUniqueInput!
    }
    alarms: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['AlarmOrderByInput'] | null; // AlarmOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['AlarmWhereInput'] | null; // AlarmWhereInput
    }
    alarmsConnection: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['AlarmOrderByInput'] | null; // AlarmOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['AlarmWhereInput'] | null; // AlarmWhereInput
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "AggregateAlarm" | "Alarm" | "AlarmConnection" | "AlarmEdge" | "BatchPayload" | "Mutation" | "PageInfo" | "Query";

export type NexusGenInputNames = "AlarmCreateInput" | "AlarmUpdateInput" | "AlarmUpdateManyMutationInput" | "AlarmWhereInput" | "AlarmWhereUniqueInput";

export type NexusGenEnumNames = "AlarmOrderByInput";

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = "Boolean" | "Float" | "ID" | "Int" | "Long" | "String";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: types.Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}