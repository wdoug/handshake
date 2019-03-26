import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo-hooks';
import { AlarmsQuery } from './generated/graphql';
import Alarm from './AlarmItem';

export const GET_ALARMS = gql`
  query alarms {
    alarms(orderBy: createdAt_DESC) {
      id
      intId
      text
      upvotes
    }
  }
`;

const AlarmsList: React.FC = () => {
  const { data, error } = useQuery<AlarmsQuery>(GET_ALARMS, {
    suspend: true,
  });
  if (error) {
    return <div>Error! {error.message}</div>;
  }

  return (
    <ul>
      {data &&
        data.alarms.map(alarm => (
          <li key={alarm.id}>
            <Alarm alarm={alarm} />
          </li>
        ))}
    </ul>
  );
};

export default AlarmsList;
