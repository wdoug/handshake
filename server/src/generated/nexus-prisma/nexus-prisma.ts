/**
 * This file was automatically generated by nexus-prisma@0.3.5
 * Do not make changes to this file directly
 */

import { core } from 'nexus'
import { GraphQLResolveInfo } from 'graphql'
import * as prisma from '../prisma-client'

declare global {
  interface NexusPrismaGen extends NexusPrismaTypes {}
}

export interface NexusPrismaTypes {
  objectTypes: {
    fields: {
      Query: QueryObject
      Alarm: AlarmObject
      AlarmConnection: AlarmConnectionObject
      PageInfo: PageInfoObject
      AlarmEdge: AlarmEdgeObject
      AggregateAlarm: AggregateAlarmObject
      Mutation: MutationObject
      BatchPayload: BatchPayloadObject
      Subscription: SubscriptionObject
      AlarmSubscriptionPayload: AlarmSubscriptionPayloadObject
      AlarmPreviousValues: AlarmPreviousValuesObject
    }
    fieldsDetails: {
      Query: QueryFieldDetails
      Alarm: AlarmFieldDetails
      AlarmConnection: AlarmConnectionFieldDetails
      PageInfo: PageInfoFieldDetails
      AlarmEdge: AlarmEdgeFieldDetails
      AggregateAlarm: AggregateAlarmFieldDetails
      Mutation: MutationFieldDetails
      BatchPayload: BatchPayloadFieldDetails
      Subscription: SubscriptionFieldDetails
      AlarmSubscriptionPayload: AlarmSubscriptionPayloadFieldDetails
      AlarmPreviousValues: AlarmPreviousValuesFieldDetails
    }
  }
  inputTypes: {
    fields: {
      AlarmWhereUniqueInput: AlarmWhereUniqueInputInputObject
      AlarmWhereInput: AlarmWhereInputInputObject
      AlarmCreateInput: AlarmCreateInputInputObject
      AlarmUpdateInput: AlarmUpdateInputInputObject
      AlarmUpdateManyMutationInput: AlarmUpdateManyMutationInputInputObject
      AlarmSubscriptionWhereInput: AlarmSubscriptionWhereInputInputObject
    }
  }
  enumTypes: {
    AlarmOrderByInput: AlarmOrderByInputValues,
    MutationType: MutationTypeValues,
  }
}

// Types for Query

type QueryObject =
  | QueryFields
  | { name: 'alarm', args?: QueryAlarmArgs[] | false, alias?: string  } 
  | { name: 'alarms', args?: QueryAlarmsArgs[] | false, alias?: string  } 
  | { name: 'alarmsConnection', args?: QueryAlarmsConnectionArgs[] | false, alias?: string  } 

type QueryFields =
  | 'alarm'
  | 'alarms'
  | 'alarmsConnection'


type QueryAlarmArgs =
  | 'where'
type QueryAlarmsArgs =
  | 'where'
  | 'orderBy'
  | 'skip'
  | 'after'
  | 'before'
  | 'first'
  | 'last'
type QueryAlarmsConnectionArgs =
  | 'where'
  | 'orderBy'
  | 'skip'
  | 'after'
  | 'before'
  | 'first'
  | 'last'
  

export interface QueryFieldDetails {
  alarm: {
    type: 'Alarm'
    args: Record<QueryAlarmArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Query">,
      args: { where: AlarmWhereUniqueInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Alarm | null> | prisma.Alarm | null
  }
  alarms: {
    type: 'Alarm'
    args: Record<QueryAlarmsArgs, core.NexusArgDef<string>>
    description: string
    list: true
    nullable: false
    resolve: (
      root: core.RootValue<"Query">,
      args: { where?: AlarmWhereInput | null, orderBy?: prisma.AlarmOrderByInput | null, skip?: number | null, after?: string | null, before?: string | null, first?: number | null, last?: number | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Alarm[]> | prisma.Alarm[]
  }
  alarmsConnection: {
    type: 'AlarmConnection'
    args: Record<QueryAlarmsConnectionArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Query">,
      args: { where?: AlarmWhereInput | null, orderBy?: prisma.AlarmOrderByInput | null, skip?: number | null, after?: string | null, before?: string | null, first?: number | null, last?: number | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.AlarmConnection> | prisma.AlarmConnection
  }
}
  

// Types for Alarm

type AlarmObject =
  | AlarmFields
  | { name: 'id', args?: [] | false, alias?: string  } 
  | { name: 'intId', args?: [] | false, alias?: string  } 
  | { name: 'text', args?: [] | false, alias?: string  } 
  | { name: 'upvotes', args?: [] | false, alias?: string  } 

type AlarmFields =
  | 'id'
  | 'intId'
  | 'text'
  | 'upvotes'



  

export interface AlarmFieldDetails {
  id: {
    type: 'ID'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  intId: {
    type: 'Int'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  text: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: undefined
  }
  upvotes: {
    type: 'Int'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: undefined
  }
}
  

// Types for AlarmConnection

type AlarmConnectionObject =
  | AlarmConnectionFields
  | { name: 'pageInfo', args?: [] | false, alias?: string  } 
  | { name: 'edges', args?: [] | false, alias?: string  } 
  | { name: 'aggregate', args?: [] | false, alias?: string  } 

type AlarmConnectionFields =
  | 'pageInfo'
  | 'edges'
  | 'aggregate'



  

export interface AlarmConnectionFieldDetails {
  pageInfo: {
    type: 'PageInfo'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"AlarmConnection">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.PageInfo> | prisma.PageInfo
  }
  edges: {
    type: 'AlarmEdge'
    args: {}
    description: string
    list: true
    nullable: false
    resolve: (
      root: core.RootValue<"AlarmConnection">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.AlarmEdge[]> | prisma.AlarmEdge[]
  }
  aggregate: {
    type: 'AggregateAlarm'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"AlarmConnection">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.AggregateAlarm> | prisma.AggregateAlarm
  }
}
  

// Types for PageInfo

type PageInfoObject =
  | PageInfoFields
  | { name: 'hasNextPage', args?: [] | false, alias?: string  } 
  | { name: 'hasPreviousPage', args?: [] | false, alias?: string  } 
  | { name: 'startCursor', args?: [] | false, alias?: string  } 
  | { name: 'endCursor', args?: [] | false, alias?: string  } 

type PageInfoFields =
  | 'hasNextPage'
  | 'hasPreviousPage'
  | 'startCursor'
  | 'endCursor'



  

export interface PageInfoFieldDetails {
  hasNextPage: {
    type: 'Boolean'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  hasPreviousPage: {
    type: 'Boolean'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  startCursor: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: undefined
  }
  endCursor: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: undefined
  }
}
  

// Types for AlarmEdge

type AlarmEdgeObject =
  | AlarmEdgeFields
  | { name: 'node', args?: [] | false, alias?: string  } 
  | { name: 'cursor', args?: [] | false, alias?: string  } 

type AlarmEdgeFields =
  | 'node'
  | 'cursor'



  

export interface AlarmEdgeFieldDetails {
  node: {
    type: 'Alarm'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"AlarmEdge">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Alarm> | prisma.Alarm
  }
  cursor: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
}
  

// Types for AggregateAlarm

type AggregateAlarmObject =
  | AggregateAlarmFields
  | { name: 'count', args?: [] | false, alias?: string  } 

type AggregateAlarmFields =
  | 'count'



  

export interface AggregateAlarmFieldDetails {
  count: {
    type: 'Int'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
}
  

// Types for Mutation

type MutationObject =
  | MutationFields
  | { name: 'createAlarm', args?: MutationCreateAlarmArgs[] | false, alias?: string  } 
  | { name: 'updateAlarm', args?: MutationUpdateAlarmArgs[] | false, alias?: string  } 
  | { name: 'updateManyAlarms', args?: MutationUpdateManyAlarmsArgs[] | false, alias?: string  } 
  | { name: 'upsertAlarm', args?: MutationUpsertAlarmArgs[] | false, alias?: string  } 
  | { name: 'deleteAlarm', args?: MutationDeleteAlarmArgs[] | false, alias?: string  } 
  | { name: 'deleteManyAlarms', args?: MutationDeleteManyAlarmsArgs[] | false, alias?: string  } 

type MutationFields =
  | 'createAlarm'
  | 'updateAlarm'
  | 'updateManyAlarms'
  | 'upsertAlarm'
  | 'deleteAlarm'
  | 'deleteManyAlarms'


type MutationCreateAlarmArgs =
  | 'data'
type MutationUpdateAlarmArgs =
  | 'data'
  | 'where'
type MutationUpdateManyAlarmsArgs =
  | 'data'
  | 'where'
type MutationUpsertAlarmArgs =
  | 'where'
  | 'create'
  | 'update'
type MutationDeleteAlarmArgs =
  | 'where'
type MutationDeleteManyAlarmsArgs =
  | 'where'
  

export interface MutationFieldDetails {
  createAlarm: {
    type: 'Alarm'
    args: Record<MutationCreateAlarmArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { data: AlarmCreateInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Alarm> | prisma.Alarm
  }
  updateAlarm: {
    type: 'Alarm'
    args: Record<MutationUpdateAlarmArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { data: AlarmUpdateInput, where: AlarmWhereUniqueInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Alarm | null> | prisma.Alarm | null
  }
  updateManyAlarms: {
    type: 'BatchPayload'
    args: Record<MutationUpdateManyAlarmsArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { data: AlarmUpdateManyMutationInput, where?: AlarmWhereInput | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.BatchPayload> | prisma.BatchPayload
  }
  upsertAlarm: {
    type: 'Alarm'
    args: Record<MutationUpsertAlarmArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { where: AlarmWhereUniqueInput, create: AlarmCreateInput, update: AlarmUpdateInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Alarm> | prisma.Alarm
  }
  deleteAlarm: {
    type: 'Alarm'
    args: Record<MutationDeleteAlarmArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { where: AlarmWhereUniqueInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Alarm | null> | prisma.Alarm | null
  }
  deleteManyAlarms: {
    type: 'BatchPayload'
    args: Record<MutationDeleteManyAlarmsArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { where?: AlarmWhereInput | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.BatchPayload> | prisma.BatchPayload
  }
}
  

// Types for BatchPayload

type BatchPayloadObject =
  | BatchPayloadFields
  | { name: 'count', args?: [] | false, alias?: string  } 

type BatchPayloadFields =
  | 'count'



  

export interface BatchPayloadFieldDetails {
  count: {
    type: 'Long'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
}
  

// Types for Subscription

type SubscriptionObject =
  | SubscriptionFields
  | { name: 'alarm', args?: SubscriptionAlarmArgs[] | false, alias?: string  } 

type SubscriptionFields =
  | 'alarm'


type SubscriptionAlarmArgs =
  | 'where'
  

export interface SubscriptionFieldDetails {
  alarm: {
    type: 'AlarmSubscriptionPayload'
    args: Record<SubscriptionAlarmArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Subscription">,
      args: { where?: AlarmSubscriptionWhereInput | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.AlarmSubscriptionPayload | null> | prisma.AlarmSubscriptionPayload | null
  }
}
  

// Types for AlarmSubscriptionPayload

type AlarmSubscriptionPayloadObject =
  | AlarmSubscriptionPayloadFields
  | { name: 'mutation', args?: [] | false, alias?: string  } 
  | { name: 'node', args?: [] | false, alias?: string  } 
  | { name: 'updatedFields', args?: [] | false, alias?: string  } 
  | { name: 'previousValues', args?: [] | false, alias?: string  } 

type AlarmSubscriptionPayloadFields =
  | 'mutation'
  | 'node'
  | 'updatedFields'
  | 'previousValues'



  

export interface AlarmSubscriptionPayloadFieldDetails {
  mutation: {
    type: 'MutationType'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"AlarmSubscriptionPayload">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.MutationType> | prisma.MutationType
  }
  node: {
    type: 'Alarm'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"AlarmSubscriptionPayload">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Alarm | null> | prisma.Alarm | null
  }
  updatedFields: {
    type: 'String'
    args: {}
    description: string
    list: true
    nullable: false
    resolve: undefined
  }
  previousValues: {
    type: 'AlarmPreviousValues'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"AlarmSubscriptionPayload">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.AlarmPreviousValues | null> | prisma.AlarmPreviousValues | null
  }
}
  

// Types for AlarmPreviousValues

type AlarmPreviousValuesObject =
  | AlarmPreviousValuesFields
  | { name: 'id', args?: [] | false, alias?: string  } 
  | { name: 'intId', args?: [] | false, alias?: string  } 
  | { name: 'text', args?: [] | false, alias?: string  } 
  | { name: 'upvotes', args?: [] | false, alias?: string  } 

type AlarmPreviousValuesFields =
  | 'id'
  | 'intId'
  | 'text'
  | 'upvotes'



  

export interface AlarmPreviousValuesFieldDetails {
  id: {
    type: 'ID'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  intId: {
    type: 'Int'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  text: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: undefined
  }
  upvotes: {
    type: 'Int'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: undefined
  }
}
  


export interface AlarmWhereUniqueInput {
  id?: string | null
  intId?: number | null
}
export type AlarmWhereUniqueInputInputObject =
  | Extract<keyof AlarmWhereUniqueInput, string>
  | { name: 'id', alias?: string  } 
  | { name: 'intId', alias?: string  } 
  
export interface AlarmWhereInput {
  id?: string | null
  id_not?: string | null
  id_in?: string[]
  id_not_in?: string[]
  id_lt?: string | null
  id_lte?: string | null
  id_gt?: string | null
  id_gte?: string | null
  id_contains?: string | null
  id_not_contains?: string | null
  id_starts_with?: string | null
  id_not_starts_with?: string | null
  id_ends_with?: string | null
  id_not_ends_with?: string | null
  intId?: number | null
  intId_not?: number | null
  intId_in?: number[]
  intId_not_in?: number[]
  intId_lt?: number | null
  intId_lte?: number | null
  intId_gt?: number | null
  intId_gte?: number | null
  text?: string | null
  text_not?: string | null
  text_in?: string[]
  text_not_in?: string[]
  text_lt?: string | null
  text_lte?: string | null
  text_gt?: string | null
  text_gte?: string | null
  text_contains?: string | null
  text_not_contains?: string | null
  text_starts_with?: string | null
  text_not_starts_with?: string | null
  text_ends_with?: string | null
  text_not_ends_with?: string | null
  upvotes?: number | null
  upvotes_not?: number | null
  upvotes_in?: number[]
  upvotes_not_in?: number[]
  upvotes_lt?: number | null
  upvotes_lte?: number | null
  upvotes_gt?: number | null
  upvotes_gte?: number | null
  AND?: AlarmWhereInput[]
  OR?: AlarmWhereInput[]
  NOT?: AlarmWhereInput[]
}
export type AlarmWhereInputInputObject =
  | Extract<keyof AlarmWhereInput, string>
  | { name: 'id', alias?: string  } 
  | { name: 'id_not', alias?: string  } 
  | { name: 'id_in', alias?: string  } 
  | { name: 'id_not_in', alias?: string  } 
  | { name: 'id_lt', alias?: string  } 
  | { name: 'id_lte', alias?: string  } 
  | { name: 'id_gt', alias?: string  } 
  | { name: 'id_gte', alias?: string  } 
  | { name: 'id_contains', alias?: string  } 
  | { name: 'id_not_contains', alias?: string  } 
  | { name: 'id_starts_with', alias?: string  } 
  | { name: 'id_not_starts_with', alias?: string  } 
  | { name: 'id_ends_with', alias?: string  } 
  | { name: 'id_not_ends_with', alias?: string  } 
  | { name: 'intId', alias?: string  } 
  | { name: 'intId_not', alias?: string  } 
  | { name: 'intId_in', alias?: string  } 
  | { name: 'intId_not_in', alias?: string  } 
  | { name: 'intId_lt', alias?: string  } 
  | { name: 'intId_lte', alias?: string  } 
  | { name: 'intId_gt', alias?: string  } 
  | { name: 'intId_gte', alias?: string  } 
  | { name: 'text', alias?: string  } 
  | { name: 'text_not', alias?: string  } 
  | { name: 'text_in', alias?: string  } 
  | { name: 'text_not_in', alias?: string  } 
  | { name: 'text_lt', alias?: string  } 
  | { name: 'text_lte', alias?: string  } 
  | { name: 'text_gt', alias?: string  } 
  | { name: 'text_gte', alias?: string  } 
  | { name: 'text_contains', alias?: string  } 
  | { name: 'text_not_contains', alias?: string  } 
  | { name: 'text_starts_with', alias?: string  } 
  | { name: 'text_not_starts_with', alias?: string  } 
  | { name: 'text_ends_with', alias?: string  } 
  | { name: 'text_not_ends_with', alias?: string  } 
  | { name: 'upvotes', alias?: string  } 
  | { name: 'upvotes_not', alias?: string  } 
  | { name: 'upvotes_in', alias?: string  } 
  | { name: 'upvotes_not_in', alias?: string  } 
  | { name: 'upvotes_lt', alias?: string  } 
  | { name: 'upvotes_lte', alias?: string  } 
  | { name: 'upvotes_gt', alias?: string  } 
  | { name: 'upvotes_gte', alias?: string  } 
  | { name: 'AND', alias?: string  } 
  | { name: 'OR', alias?: string  } 
  | { name: 'NOT', alias?: string  } 
  
export interface AlarmCreateInput {
  intId?: number
  text?: string | null
  upvotes?: number | null
}
export type AlarmCreateInputInputObject =
  | Extract<keyof AlarmCreateInput, string>
  | { name: 'intId', alias?: string  } 
  | { name: 'text', alias?: string  } 
  | { name: 'upvotes', alias?: string  } 
  
export interface AlarmUpdateInput {
  intId?: number | null
  text?: string | null
  upvotes?: number | null
}
export type AlarmUpdateInputInputObject =
  | Extract<keyof AlarmUpdateInput, string>
  | { name: 'intId', alias?: string  } 
  | { name: 'text', alias?: string  } 
  | { name: 'upvotes', alias?: string  } 
  
export interface AlarmUpdateManyMutationInput {
  intId?: number | null
  text?: string | null
  upvotes?: number | null
}
export type AlarmUpdateManyMutationInputInputObject =
  | Extract<keyof AlarmUpdateManyMutationInput, string>
  | { name: 'intId', alias?: string  } 
  | { name: 'text', alias?: string  } 
  | { name: 'upvotes', alias?: string  } 
  
export interface AlarmSubscriptionWhereInput {
  mutation_in?: prisma.MutationType[]
  updatedFields_contains?: string | null
  updatedFields_contains_every?: string[]
  updatedFields_contains_some?: string[]
  node?: AlarmWhereInput | null
  AND?: AlarmSubscriptionWhereInput[]
  OR?: AlarmSubscriptionWhereInput[]
  NOT?: AlarmSubscriptionWhereInput[]
}
export type AlarmSubscriptionWhereInputInputObject =
  | Extract<keyof AlarmSubscriptionWhereInput, string>
  | { name: 'mutation_in', alias?: string  } 
  | { name: 'updatedFields_contains', alias?: string  } 
  | { name: 'updatedFields_contains_every', alias?: string  } 
  | { name: 'updatedFields_contains_some', alias?: string  } 
  | { name: 'node', alias?: string  } 
  | { name: 'AND', alias?: string  } 
  | { name: 'OR', alias?: string  } 
  | { name: 'NOT', alias?: string  } 
  

export type AlarmOrderByInputValues =
  | 'id_ASC'
  | 'id_DESC'
  | 'intId_ASC'
  | 'intId_DESC'
  | 'text_ASC'
  | 'text_DESC'
  | 'upvotes_ASC'
  | 'upvotes_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  
export type MutationTypeValues =
  | 'CREATED'
  | 'UPDATED'
  | 'DELETED'
  
  