type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Long: any;
};

export type AggregateAlarm = {
  count: Scalars['Int'];
};

export type Alarm = {
  id: Scalars['ID'];
  intId: Scalars['Int'];
  text?: Maybe<Scalars['String']>;
};

export type AlarmConnection = {
  pageInfo: PageInfo;
  edges: Array<AlarmEdge>;
  aggregate: AggregateAlarm;
};

export type AlarmCreateInput = {
  intId: Scalars['Int'];
  text?: Maybe<Scalars['String']>;
};

export type AlarmEdge = {
  node: Alarm;
  cursor: Scalars['String'];
};

export enum AlarmOrderByInput {
  Id_Asc = 'id_ASC',
  Id_Desc = 'id_DESC',
  IntId_Asc = 'intId_ASC',
  IntId_Desc = 'intId_DESC',
  Text_Asc = 'text_ASC',
  Text_Desc = 'text_DESC',
  CreatedAt_Asc = 'createdAt_ASC',
  CreatedAt_Desc = 'createdAt_DESC',
  UpdatedAt_Asc = 'updatedAt_ASC',
  UpdatedAt_Desc = 'updatedAt_DESC',
}

export type AlarmUpdateInput = {
  intId?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
};

export type AlarmUpdateManyMutationInput = {
  intId?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
};

export type AlarmWhereInput = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  intId?: Maybe<Scalars['Int']>;
  intId_not?: Maybe<Scalars['Int']>;
  intId_in?: Maybe<Array<Scalars['Int']>>;
  intId_not_in?: Maybe<Array<Scalars['Int']>>;
  intId_lt?: Maybe<Scalars['Int']>;
  intId_lte?: Maybe<Scalars['Int']>;
  intId_gt?: Maybe<Scalars['Int']>;
  intId_gte?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  text_not?: Maybe<Scalars['String']>;
  text_in?: Maybe<Array<Scalars['String']>>;
  text_not_in?: Maybe<Array<Scalars['String']>>;
  text_lt?: Maybe<Scalars['String']>;
  text_lte?: Maybe<Scalars['String']>;
  text_gt?: Maybe<Scalars['String']>;
  text_gte?: Maybe<Scalars['String']>;
  text_contains?: Maybe<Scalars['String']>;
  text_not_contains?: Maybe<Scalars['String']>;
  text_starts_with?: Maybe<Scalars['String']>;
  text_not_starts_with?: Maybe<Scalars['String']>;
  text_ends_with?: Maybe<Scalars['String']>;
  text_not_ends_with?: Maybe<Scalars['String']>;
  AND?: Maybe<Array<AlarmWhereInput>>;
  OR?: Maybe<Array<AlarmWhereInput>>;
  NOT?: Maybe<Array<AlarmWhereInput>>;
};

export type AlarmWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  intId?: Maybe<Scalars['Int']>;
};

export type BatchPayload = {
  count: Scalars['Long'];
};

export type Mutation = {
  createAlarm: Alarm;
  updateAlarm?: Maybe<Alarm>;
  updateManyAlarms: BatchPayload;
  upsertAlarm: Alarm;
  deleteAlarm?: Maybe<Alarm>;
  deleteManyAlarms: BatchPayload;
};

export type MutationCreateAlarmArgs = {
  data: AlarmCreateInput;
};

export type MutationUpdateAlarmArgs = {
  data: AlarmUpdateInput;
  where: AlarmWhereUniqueInput;
};

export type MutationUpdateManyAlarmsArgs = {
  data: AlarmUpdateManyMutationInput;
  where?: Maybe<AlarmWhereInput>;
};

export type MutationUpsertAlarmArgs = {
  where: AlarmWhereUniqueInput;
  create: AlarmCreateInput;
  update: AlarmUpdateInput;
};

export type MutationDeleteAlarmArgs = {
  where: AlarmWhereUniqueInput;
};

export type MutationDeleteManyAlarmsArgs = {
  where?: Maybe<AlarmWhereInput>;
};

export type PageInfo = {
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
  endCursor?: Maybe<Scalars['String']>;
};

export type Query = {
  alarm?: Maybe<Alarm>;
  alarms: Array<Alarm>;
  alarmsConnection: AlarmConnection;
};

export type QueryAlarmArgs = {
  where: AlarmWhereUniqueInput;
};

export type QueryAlarmsArgs = {
  where?: Maybe<AlarmWhereInput>;
  orderBy?: Maybe<AlarmOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type QueryAlarmsConnectionArgs = {
  where?: Maybe<AlarmWhereInput>;
  orderBy?: Maybe<AlarmOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};
export type AlarmsQueryVariables = {};

export type AlarmsQuery = { __typename?: 'Query' } & {
  alarms: Array<
    { __typename?: 'Alarm' } & Pick<Alarm, 'id' | 'intId' | 'text'>
  >;
};
