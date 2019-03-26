import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo-hooks';
import { AlarmsQuery } from './generated/graphql';

export const GET_ALARMS = gql`
  query alarms {
    alarms(orderBy: createdAt_DESC) {
      id
      intId
      text
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
          <li key={alarm.id}>{`${alarm.intId} -- ${alarm.text &&
            alarm.text.toUpperCase()}`}</li>
        ))}
    </ul>
  );
};

export default AlarmsList;
