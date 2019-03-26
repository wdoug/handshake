import React, { useState } from 'react';
import { useMutation } from 'react-apollo-hooks';
import gql from 'graphql-tag';

const ADD_ALARM = gql`
  mutation createAlarm($text: String) {
    createAlarm(text: $text) {
      intId
      text
    }
  }
`;

const CreateAlarm: React.FC = () => {
  const [text, setText] = useState('');
  const addAlarm = useMutation(ADD_ALARM, {
    variables: {
      text,
    },
  });

  return (
    <form>
      <input type="text" value={text} onChange={e => setText(e.target.value)} />
      <button
        type="submit"
        onClick={async e => {
          e.preventDefault();
          await addAlarm();
          setText('');
        }}
      >
        Add Alarm
      </button>
    </form>
  );
};

export default CreateAlarm;
