import winston from "winston";

const logger: winston.Logger = winston.createLogger({
  level: 'error', // Nivel mínimo de logs a mostrar
  format: winston.format.colorize(), // Formato simple de log
  transports: [
    new winston.transports.Console(), // Transporte para la consola
  ],
});

export default logger;
