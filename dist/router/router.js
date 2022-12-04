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
app.use(express_1.default.json()); // mapea la inf en formato json
app.use(express_1.default.urlencoded({ extended: true })); // en url
let result;
router.get('/usuarios', async function (req, res) {
    selectUsers(req, res);
});
router.get('/publicaciones', async function (req, res) {
    selectPublicaciones(req, res);
});
router.get('/mensajes', async function (req, res) {
    selectMensajes(req, res);
});
router.get('/invitaciones', async function (req, res) {
    selectInvitaciones(req, res);
});
router.get('/grupos', async function (req, res) {
    selectGrupos(req, res);
});
router.get('/usuariogrupo', async function (req, res) {
    selectUsuarioGrupo(req, res);
});
router.get('/empleos', async function (req, res) {
    selectEmpleos(req, res);
});
router.get('/personas', async function (req, res) {
    selectPersonas(req, res);
});
//----------------------------FUNCIONES 
async function selectPersonas(req, res) {
    try {
        exports.connection = await oracledb_1.default.getConnection({
            user: "SYSTEM",
            password: "0000",
            connectString: "localhost:1521/xepdb1"
        });
        console.log('connected to database on router');
        result = await exports.connection.execute(`SELECT * FROM PERSON `);
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
async function selectEmpleos(req, res) {
    try {
        exports.connection = await oracledb_1.default.getConnection({
            user: "SYSTEM",
            password: "0000",
            connectString: "localhost:1521/xepdb1"
        });
        console.log('connected to database on router');
        result = await exports.connection.execute(`SELECT * FROM EMPLEO `);
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
async function selectGrupos(req, res) {
    try {
        exports.connection = await oracledb_1.default.getConnection({
            user: "SYSTEM",
            password: "0000",
            connectString: "localhost:1521/xepdb1"
        });
        console.log('connected to database on router');
        result = await exports.connection.execute(`SELECT * FROM GRUPO`);
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
async function selectUsuarioGrupo(req, res) {
    try {
        exports.connection = await oracledb_1.default.getConnection({
            user: "SYSTEM",
            password: "0000",
            connectString: "localhost:1521/xepdb1"
        });
        console.log('connected to database on router');
        result = await exports.connection.execute(`SELECT * FROM USUARIOGRUPO`);
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
async function selectInvitaciones(req, res) {
    try {
        exports.connection = await oracledb_1.default.getConnection({
            user: "SYSTEM",
            password: "0000",
            connectString: "localhost:1521/xepdb1"
        });
        console.log('connected to database on router');
        result = await exports.connection.execute(`SELECT * FROM SOLICITUD WHERE SOLICITUD.ESTADO= 'S'`);
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
router.post("/nuevapersona", async function (req, res) {
    try {
        exports.connection = await oracledb_1.default.getConnection({
            user: "SYSTEM",
            password: "0000",
            connectString: "localhost:1521/xepdb1"
        });
        console.log('connected to database on router');
        result = await exports.connection.execute(`INSERT INTO  Person (ID, P_NOMBRE,P_APELLIDO,CORREO)  VALUES (:ID, :P_NOMBRE, :P_APELLIDO', :CORREO)`, [req.body.id, req.body.p_Nombre, req.body.p_apellido, req.body.correo], { autoCommit: true });
        res.send(result.body);
        res.end;
    }
    catch (err) {
        return res.send(err);
    }
});
async function selectUsers(req, res) {
    try {
        exports.connection = await oracledb_1.default.getConnection({
            user: "SYSTEM",
            password: "0000",
            connectString: "localhost:1521/xepdb1"
        });
        console.log('connected to database on router');
        result = await exports.connection.execute(`SELECT  PERSON.correo , USUARIO.password, PERSON.P_Nombre ,USUARIO.informacion_adicional, PERSON.P_APELLIDO FROM Usuario 
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
async function selectMensajes(req, res) {
    try {
        exports.connection = await oracledb_1.default.getConnection({
            user: "SYSTEM",
            password: "0000",
            connectString: "localhost:1521/xepdb1"
        });
        console.log('connected to database on router');
        result = await exports.connection.execute(`SELECT  * FROM MENSAJE`);
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
async function selectPublicaciones(req, res) {
    try {
        exports.connection = await oracledb_1.default.getConnection({
            user: "SYSTEM",
            password: "0000",
            connectString: "localhost:1521/xepdb1"
        });
        console.log('connected to database on router');
        result = await exports.connection.execute(`SELECT * FROM publicacion`);
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
