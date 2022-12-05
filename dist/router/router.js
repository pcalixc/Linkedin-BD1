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
let result1;
let result2;
let result3;
let result4;
let result5;
let result6;
let result7;
let result8;
let result9;
let result11;
let result12;
let result13;
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
router.get('/contactos', async function (req, res) {
    selectContactos(req, res);
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
router.get('/formacion', async function (req, res) {
    selectFormacion(req, res);
});
router.get('/empresas', async function (req, res) {
    selectEmpresas(req, res);
});
//----------------------------FUNCIONES 
async function selectFormacion(req, res) {
    try {
        exports.connection = await oracledb_1.default.getConnection({
            user: "SYSTEM",
            password: "0000",
            connectString: "localhost:1521/xepdb1"
        });
        console.log('connected to database on router.selectPersonas');
        result13 = await exports.connection.execute(`SELECT * FROM FORMACION `);
    }
    catch (err) {
        return res.send(err);
    }
    finally {
        if (exports.connection) {
            try {
                await exports.connection.close();
                console.log('close connection success .selectPersonas');
            }
            catch (err) {
                console.error(err);
            }
        }
        if (result13.rows.length == 0) {
            return res.send('query send no rows');
        }
        else {
            return res.send(result13.rows);
        }
    }
}
async function selectEmpresas(req, res) {
    try {
        exports.connection = await oracledb_1.default.getConnection({
            user: "SYSTEM",
            password: "0000",
            connectString: "localhost:1521/xepdb1"
        });
        console.log('connected to database on router.selectPersonas');
        result12 = await exports.connection.execute(`SELECT * FROM EMPRESA `);
    }
    catch (err) {
        return res.send(err);
    }
    finally {
        if (exports.connection) {
            try {
                await exports.connection.close();
                console.log('close connection success .selectPersonas');
            }
            catch (err) {
                console.error(err);
            }
        }
        if (result12.rows.length == 0) {
            return res.send('query send no rows');
        }
        else {
            return res.send(result12.rows);
        }
    }
}
async function selectPersonas(req, res) {
    try {
        exports.connection = await oracledb_1.default.getConnection({
            user: "SYSTEM",
            password: "0000",
            connectString: "localhost:1521/xepdb1"
        });
        console.log('connected to database on router.selectPersonas');
        result1 = await exports.connection.execute(`SELECT * FROM PERSON `);
    }
    catch (err) {
        return res.send(err);
    }
    finally {
        if (exports.connection) {
            try {
                await exports.connection.close();
                console.log('close connection success .selectPersonas');
            }
            catch (err) {
                console.error(err);
            }
        }
        if (result1.rows.length == 0) {
            return res.send('query send no rows');
        }
        else {
            return res.send(result1.rows);
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
        console.log('connected to database on router.selectEmpleos');
        result2 = await exports.connection.execute(`SELECT * FROM EMPLEO `);
    }
    catch (err) {
        return res.send(err);
    }
    finally {
        if (exports.connection) {
            try {
                await exports.connection.close();
                console.log('close connection success selectEmpleos');
            }
            catch (err) {
                console.error(err);
            }
        }
        if (result2.rows.length == 0) {
            return res.send('query send no rows');
        }
        else {
            return res.send(result2.rows);
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
        console.log('connected to database on router.selectGrupos');
        result3 = await exports.connection.execute(`SELECT * FROM GRUPO`);
    }
    catch (err) {
        return res.send(err);
    }
    finally {
        if (exports.connection) {
            try {
                await exports.connection.close();
                console.log('close connection success selectGrupos');
            }
            catch (err) {
                console.error(err);
            }
        }
        if (result3.rows.length == 0) {
            return res.send('query send no rows grupos');
        }
        else {
            return res.send(result3.rows);
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
        console.log('connected to database on router.usuariogrupo');
        result4 = await exports.connection.execute(`SELECT * FROM USUARIOGRUPO`);
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
        if (result4.rows.length == 0) {
            return res.send('query send no rows');
        }
        else {
            return res.send(result4.rows);
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
        console.log('connected to database on router.invitaciones');
        result5 = await exports.connection.execute(`SELECT * FROM SOLICITUD WHERE SOLICITUD.ESTADO= 'S'`);
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
        if (result5.rows.length == 0) {
            return res.send('query send no rows');
        }
        else {
            return res.send(result5.rows);
        }
    }
}
async function selectContactos(req, res) {
    try {
        exports.connection = await oracledb_1.default.getConnection({
            user: "SYSTEM",
            password: "0000",
            connectString: "localhost:1521/xepdb1"
        });
        console.log('connected to database on router');
        result6 = await exports.connection.execute(`SELECT * FROM SOLICITUD WHERE SOLICITUD.ESTADO= 'C'`);
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
        if (result6.rows.length == 0) {
            return res.send('query send no rows');
        }
        else {
            return res.send(result6.rows);
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
        result7 = await exports.connection.execute(`INSERT INTO  Person (req.body.id, req.body.p_Nombre,req.body.p_apellido,req.body.correo)  VALUES (:ID, :P_NOMBRE, :P_APELLIDO', :CORREO)`, { autoCommit: true });
        res.send(result7);
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
        result8 = await exports.connection.execute(`SELECT  PERSON.correo , USUARIO.password, PERSON.P_Nombre ,USUARIO.informacion_adicional, PERSON.P_APELLIDO FROM Usuario 
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
        if (result8.rows.length == 0) {
            return res.send('query send no rows');
        }
        else {
            return res.send(result8.rows);
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
        result9 = await exports.connection.execute(`SELECT  * FROM MENSAJE`);
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
        if (result9.rows.length == 0) {
            return res.send('query send no rows');
        }
        else {
            return res.send(result9.rows);
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
        result11 = await exports.connection.execute(`SELECT * FROM publicacion`);
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
        if (result11.rows.length == 0) {
            return res.send('query send no rows');
        }
        else {
            return res.send(result11.rows);
        }
    }
}
app.listen(port, () => console.log("nodeOracleRestApi app listening on port %s!", port));
exports.default = router;
