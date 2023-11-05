import pingController from "../controllers/ping.controller";

export default async (cmd, data): Promise<false | object> => {
  switch (cmd) {
    case "ping":
      return pingController.ping(data);
  }
  return false;
};
