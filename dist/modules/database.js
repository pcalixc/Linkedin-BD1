"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = void 0;
const oracledb_1 = __importDefault(require("oracledb"));
async function Database() {
    let connection;
    try {
        connection = await oracledb_1.default.getConnection({ user: "SYSTEM", password: "0000", connectionString: "localhost:1521/xepdb1" });
        console.log("Successfully connected to Oracle Database");
        connection.execute(`INSERT INTO Categoria (id, nombre) VALUES (19, 'hsdhkhdkahs')`);
        //connection.commit();
        let data = await connection.execute(`SELECT * FROM categoria`);
        let data1 = JSON.parse((JSON.stringify(data.rows)));
        //console.log(data1);
    }
    catch (err) {
        console.error(err);
    }
    finally {
        if (connection) {
            try {
                await connection.close();
            }
            catch (err) {
                console.error(err);
            }
        }
    }
}
exports.Database = Database;
