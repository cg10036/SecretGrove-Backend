import pingService from "../services/ping.service";

const ping = (data) => {
  return pingService.ping();
};

export default { ping };
