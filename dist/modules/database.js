"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = void 0;
const oracledb_1 = __importDefault(require("oracledb"));
function Database() {
    return __awaiter(this, void 0, void 0, function* () {
        let connection;
        try {
            connection = yield oracledb_1.default.getConnection({ user: "SYSTEM", password: "0000", connectionString: "localhost:1521/xepdb1" });
            console.log("Successfully connected to Oracle Database");
            const data = yield connection.execute(`SELECT * FROM USUARIO`);
            let data1 = JSON.parse((JSON.stringify(data.rows)));
            console.log(data1);
        }
        catch (err) {
            console.error(err);
        }
        finally {
            if (connection) {
                try {
                    yield connection.close();
                }
                catch (err) {
                    console.error(err);
                }
            }
        }
    });
}
exports.Database = Database;
