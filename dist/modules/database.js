"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckConnection = exports.connection = void 0;
const oracledb_1 = __importDefault(require("oracledb"));
async function CheckConnection() {
    try {
        exports.connection = await oracledb_1.default.getConnection({ user: "SYSTEM", password: "0000", connectionString: "localhost:1521/xepdb1" });
        console.log("Successfully connected to Oracle Database");
    }
    catch (err) {
        console.error(err);
    }
    finally {
        if (exports.connection) {
            try {
                await exports.connection.close();
                console.log('close connection success');
            }
            catch (err) {
                console.error(err);
            }
        }
    }
}
exports.CheckConnection = CheckConnection;
