import { prismaObjectType } from 'nexus-prisma';
import { stringArg } from 'nexus';

export const Mutation = prismaObjectType({
  name: 'Mutation',
  definition(t) {
    t.prismaFields(['*']);

    t.field('createAlarm', {
      type: 'Alarm',
      args: { text: stringArg() },
      resolve: async (_, { text }, ctx) => {
        const [{ intId: lastInt }] = await ctx.prisma.alarms({
          orderBy: 'intId_ASC',
          last: 1,
        });
        return ctx.prisma.createAlarm({
          text,
          intId: lastInt + 1,
        });
      },
    });
  },
});
