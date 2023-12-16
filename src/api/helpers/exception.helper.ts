import { HttpResponse } from "./response.helper";

const Layer = require("express/lib/router/layer.js");

const addCustomAsyncErrorHandler = () => {
  Layer.prototype.handle_request = function handle(req, res, next) {
    var fn = this.handle;

    if (fn.length > 3) {
      // not a standard request handler
      return next();
    }

    try {
      Promise.resolve(fn(req, res, next)).catch(next);
    } catch (err) {
      next(err);
    }
  };
};
const errorHandler = (err, req, res, next) => {
  console.log(err);
  if (err instanceof HttpResponse) {
    res.status(err.status);
    if (typeof err.data === "string") {
      return res.send(err.data);
    }
    return res.json(err.data);
  }

  return res.status(500).send("Internal Server Error");
};

export { addCustomAsyncErrorHandler, errorHandler };
