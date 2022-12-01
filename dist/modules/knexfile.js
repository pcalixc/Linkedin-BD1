"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moduleKnexfile = module.exports = {
    development: {
        client: 'oracledb',
        connection: {
            user: 'SYSTEM',
            password: '0000',
            connectString: '"localhost:1521/xepdb1"'
        }
    }
};
exports.default = moduleKnexfile;
