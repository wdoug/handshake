import React from 'react';
import { useMutation } from 'react-apollo-hooks';
import gql from 'graphql-tag';

type AlarmProps = {
  alarm: {
    intId: number;
    text?: string | null;
    upvotes?: number | null;
  };
};

const UPVOTE = gql`
  mutation upvote($intId: Int!) {
    upvote(intId: $intId) {
      text
      intId
      upvotes
    }
  }
`;

const Alarm: React.FC<AlarmProps> = ({ alarm }) => {
  const upvote = useMutation(UPVOTE, {
    variables: { intId: alarm.intId },
  });
  return (
    <div>
      {`${alarm.intId} -- ${alarm.text && alarm.text.toUpperCase()} `}
      <span>{alarm.upvotes}</span>
      <button onClick={() => upvote()}>Upvote</button>
    </div>
  );
};

export default Alarm;
