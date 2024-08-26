const MongoSingleton = require('./MongoSingleton.js');

const firstConnection = MongoSingleton.getInstance();

const secondConnection = MongoSingleton.getInstance();
