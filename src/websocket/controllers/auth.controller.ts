import * as uws from "uWebSockets.js";
import authService from "../services/auth.service";

const login = (ws: uws.WebSocket<unknown>, data) => {
  let { pubkey } = data;
  return authService.login(ws, pubkey);
};

export default { login };
