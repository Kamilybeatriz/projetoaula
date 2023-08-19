const dbConfig = require("../config/db.config.js");

const sequelize = require("sequelize");
const { db, user } = require("../config/db.config.js");
const sequelize = new sequelize(dbConfig.db,  dbConfig.
    user, dbConfig.passaword, {
        host:dbConfig.host,
        dialect:dbConfig.dialect,
        operatoraliases: false,
        pool:{
            max:dbConfig.pool,max,
            min:dbConfig.pool.min,
            acquire:dbConfig.pool.acquire,
            idlie:dbConfig.pool.adlie
        }
    });

    const db = {}

db.sequelize = sequelize;
db.sequelize = sequelize;