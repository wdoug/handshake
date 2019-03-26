import { prismaObjectType } from 'nexus-prisma';

export const Alarm = prismaObjectType({
  name: 'Alarm',
  definition(t) {
    t.prismaFields(['*']);
  },
});
