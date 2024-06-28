import winston from "winston";
import expressWinston from "express-winston";

export default expressWinston.logger({
  transports: [new winston.transports.Console()],
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.json()
  ),
  meta: false,
  expressFormat: false,
  colorize: true,
  msg: "HTTP {{req.method}} {{req.url}} StatusCode {{res.statusCode}} Message: {{res.statusMessage}} Time {{res.responseTime}}ms",
  ignoreRoute: function (req, res) {
    return false;
  },
  dynamicMeta: (req, res, err) => {
    return {
      method: req.method,
      url: req.url,
      error: err.message,
      stack: err.stack
    };
  }
});
