import { prisma } from '../src/generated/prisma-client';

async function main() {
  const alarmData = [
    {
      intId: 1,
      text: 'this is the first alarm',
    },
    {
      intId: 2,
      text: 'this is the second alarm',
    },
  ];
  await Promise.all(alarmData.map(alarm => prisma.createAlarm(alarm)));
}

main();
