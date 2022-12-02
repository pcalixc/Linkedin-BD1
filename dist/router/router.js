"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = void 0;
const oracledb_1 = __importDefault(require("oracledb"));
const express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
const app = (0, express_1.default)();
const port = process.env.PORT;
let result;
router.get('/usuarios', async function (req, res) {
    selectUsers(req, res);
});
async function selectUsers(req, res) {
    try {
        exports.connection = await oracledb_1.default.getConnection({
            user: "SYSTEM",
            password: "0000",
            connectString: "localhost:1521/xepdb1"
        });
        console.log('connected to database on router');
        result = await exports.connection.execute(`SELECT  PERSON.correo , USUARIO.password, PERSON.id, USUARIO.ID FROM Usuario 
    INNER JOIN PERSON  ON USUARIO.persona_id= PERSON.id`);
    }
    catch (err) {
        return res.send(err);
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
        if (result.rows.length == 0) {
            return res.send('query send no rows');
        }
        else {
            return res.send(result.rows);
        }
    }
}
app.listen(port, () => console.log("nodeOracleRestApi app listening on port %s!", port));
exports.default = router;
