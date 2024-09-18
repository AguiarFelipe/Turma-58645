import winston from 'winston';

const logger = winston.createLogger({
    transports:[
        new winston.transports.Console({level:"info"}),
        new winston.transports.File({filename: './errors.log'})
    ]
});

export const addLogger = (req, res, next)=>{
    req.logger = logger;
    req.logger.http(`${req.method} na ${req.url} - ${new Date().toLocaleDateString()}`);
    next();
};