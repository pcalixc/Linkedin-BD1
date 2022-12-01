"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const knex = require("knex")({
    client: "oracledb",
    connection: {
        host: 'LOCALHOST',
        user: 'SYSTEM',
        password: '0000',
        database: 'PRUEBA',
    },
    pool: {
        min: 0,
        max: 5,
        afterCreate: function (conn, done) {
            conn.query('SET timezone="UTC";', function (err) {
                if (err) {
                    done(err, conn);
                }
                else {
                    conn.query("SELECT set_limit(0.01);", function (err) {
                        done(err, conn);
                    });
                }
            });
        },
    },
    debug: true,
    acquireConnectionTimeout: 10000,
    migrations: {
        tableName: "migrations",
    },
});
exports.default = knex;
