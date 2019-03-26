import React, { Suspense } from 'react';
import { render, wait } from 'react-testing-library';
import { createClient, getQueries } from '../testUtils';
import { ApolloProvider } from 'react-apollo-hooks';
import Alarms, { GET_ALARMS } from '../AlarmsList';

const mocks = [
  {
    request: {
      query: GET_ALARMS,
      variables: {},
    },
    result: {
      data: {
        alarms: [
          {
            __typeName: 'Query',
            id: 'asdf',
            intId: 1,
            text: 'an alarm',
          },
        ],
      },
    },
  },
];

const { getByText } = getQueries();
const client = createClient({ mocks });

describe('happy path', () => {
  beforeEach(() => {
    const ui = <Alarms />;
    render(
      <Suspense fallback={<>Loading</>}>
        <ApolloProvider client={client}>{ui}</ApolloProvider>
      </Suspense>,
    );
  });

  it('initially shows a loading state', () => {
    expect(getByText('Loading')).toBeInTheDocument();
  });

  it('shows the expected output after loading', async () => {
    await wait(() => expect(getByText('Loading')).toBeInTheDocument());
  });
});
