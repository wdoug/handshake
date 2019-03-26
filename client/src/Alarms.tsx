import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo-hooks';

const GET_ALARMS = gql`
  query alarms {
    alarms {
      id
      intId
      text
    }
  }
`;

const Alarms: React.FC = () => {
  const { data, error, loading } = useQuery(GET_ALARMS);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error! {error.message}</div>;
  }

  return (
    <React.Fragment>
      <h1>Alarms</h1>
      <ul>
        {data.alarms.map((alarm: any) => (
          <li key={alarm.id}>{`${alarm.intId} -- ${alarm.text}`}</li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default Alarms;
