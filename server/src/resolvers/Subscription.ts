import { subscriptionField } from 'nexus';

export const feedAlarms = subscriptionField('feedAlarms', {
  type: 'Alarm',
  subscribe: (parent, args, context) => {
    return context.prisma.$subscribe
      .alarm({
        mutation_in: ['CREATED', 'UPDATED'],
      })
      .node();
  },
  resolve: payload => {
    return payload;
  },
});
