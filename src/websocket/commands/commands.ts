import pingCommand from "./ping.command";

const handlers: ((cmd: any, data: any) => Promise<false | object>)[] = [
  pingCommand,
];

export default async (ws, id, cmd, data) => {
  try {
    for (let handler of handlers) {
      let result = await handler(cmd, data);
      if (result === false) continue;
      return ws.send(JSON.stringify({ i: id, ...result }));
    }
  } catch (err) {
    console.log(err);
  }
  return;
};
