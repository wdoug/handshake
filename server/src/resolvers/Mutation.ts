import { prismaObjectType } from 'nexus-prisma';
import { stringArg } from 'nexus';
import fetch from 'node-fetch';

async function sendNotification(intId: number) {
  try {
    const res = await fetch(
      'https://bellbird.joinhandshake-internal.com/push',
      {
        method: 'POST',
        body: JSON.stringify({ alarm_id: intId }),
      },
    );
    const json = await res.json();
    if (res.status !== 200 || !json || !json.success) {
      throw new Error(
        `Error sending notification. Status: ${res.status}, body: ${json}`,
      );
    }
    console.log(`Successfully sent notification for intId: ${intId}`);
  } catch (e) {
    console.error(e.message);
  }
}

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
        const newAlarm = await ctx.prisma.createAlarm({
          text,
          intId: lastInt + 1,
        });

        // After the alarm is created, post to the handshake service
        // Don't await because we don't want to block the graphql response
        sendNotification(lastInt + 1);

        return newAlarm;
      },
    });
  },
});
