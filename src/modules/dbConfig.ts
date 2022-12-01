
import oracledb from 'oracledb';

//import knex from 'knex';

import knexfile from './knexfile';

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
    afterCreate: function (conn:any, done:any) {
      conn.query('SET timezone="UTC";', function (err: any) {
        if (err) {
          done(err, conn);
        } else {
          conn.query("SELECT set_limit(0.01);", function (err:any) {
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

export default knex;