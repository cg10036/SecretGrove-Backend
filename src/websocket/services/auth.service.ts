import * as uws from "uWebSockets.js";

const login = (ws: uws.WebSocket<unknown>, pubkey: string) => {
  ws.subscribe(pubkey);
  console.log(`Subscribed to ${pubkey}`);
  return { pubkey };
};

export default { login };
