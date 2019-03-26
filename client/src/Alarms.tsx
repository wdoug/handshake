import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo-hooks';
import { AlarmsQuery } from './generated/graphql';

export const GET_ALARMS = gql`
  query alarms {
    alarms {
      id
      intId
      text
    }
  }
`;

const Alarms: React.FC = () => {
  const { data, error } = useQuery<AlarmsQuery>(GET_ALARMS, {
    suspend: true,
  });
  if (error) {
    return <div>Error! {error.message}</div>;
  }

  return (
    <React.Fragment>
      <h1>Alarms</h1>
      <ul>
        {data &&
          data.alarms.map(alarm => (
            <li key={alarm.id}>{`${alarm.intId} -- ${alarm.text}`}</li>
          ))}
      </ul>
    </React.Fragment>
  );
};

export default Alarms;
