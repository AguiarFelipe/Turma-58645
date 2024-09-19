import winston from 'winston';

const customLevesOptions = {
    levels:{
        fatal: 0,
        error: 1,
        warning: 2,
        info: 3,
        debug: 4
    },
    colors:{
        fatal: "red",
        error: "orange",
        warning: "yellow",
        info: "blue",
        debug: "white"
    }
}

const logger = winston.createLogger({

    levels: customLevesOptions.levels,

    format: winston.format.combine(
        winston.format.colorize({colors: customLevesOptions.colors}),
        winston.format.simple()
    ),

    transports:[
        new winston.transports.Console({level:"info"}),
        new winston.transports.File({filename: './errors.log', level:'warning'})
    ]
});
winston.addColors(customLevesOptions.colors);

export const addLogger = (req, res, next)=>{
    req.logger = logger;
    req.logger.info(`${req.method} na ${req.url} - ${new Date().toLocaleDateString()}`);
    next();
};