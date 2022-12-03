
import oracledb from 'oracledb';
import express, { Express, Request, Response } from 'express';
var router= express.Router();
const app: Express = express();
const port = process.env.PORT;
export let connection: any;
let result :any;

router.get('/usuarios',async function(req, res){
   selectUsers(req,res)
})

router.get('/publicaciones',async function(req, res){
  selectPublicaciones(req,res)
})
router.get('/mensajes',async function(req, res){
  selectMensajes(req,res)
})

router.get('/seguidores',async function(req, res){
  selectSeguidores(req,res)
})

async function selectSeguidores(req: any, res:any) {
  try {
    connection = await oracledb.getConnection({
      user: "SYSTEM",
      password: "0000",
      connectString: "localhost:1521/xepdb1"
    });
    console.log('connected to database on router');

    result = await connection.execute(`    
    SELECT * FROM SOLICITUD 
    WHERE solicitud.estado='S'`)

  } catch (err) {
    return res.send(err);
  } finally {
    if (connection) {
      try {

        await connection.close();
        console.log('close connection success');
      } catch (err) {
        console.error(err);
      }
    }
    if (result.rows.length == 0) {

      return res.send('query send no rows');
    } else {
     
      return res.send(result.rows);
    }
  }
}
// router.post("/nuevousuario", async function(req,res) {
//   try {
//     connection = await oracledb.getConnection({
//       user: "SYSTEM",
//       password: "0000",
//       connectString: "localhost:1521/xepdb1"
//     });
//     console.log('connected to database on router');
//     result = await connection.execute(`INSERT INTO  Person (ID, P_NOMBRE,P_APELLIDO,CORREO)  VALUES (:id, :pnombre, :papellido', :correo)`,[req.body.ID, req.body.P_NOMBRE, req.body.P_APELLIDO, req.body.CORREO],
//     {autoCommit: true});
//     res.send(result)
//   } catch (err) {
//     return res.send(err);
//   } 
//  } )

async function selectUsers(req: any, res:any) {
  try {
    connection = await oracledb.getConnection({
      user: "SYSTEM",
      password: "0000",
      connectString: "localhost:1521/xepdb1"
    });
    console.log('connected to database on router');

    result = await connection.execute(`SELECT  PERSON.correo , USUARIO.password, PERSON.P_Nombre ,USUARIO.informacion_adicional, PERSON.P_APELLIDO FROM Usuario 
    INNER JOIN PERSON  ON USUARIO.persona_id= PERSON.id`)

  } catch (err) {
    return res.send(err);
  } finally {
    if (connection) {
      try {

        await connection.close();
        console.log('close connection success');
      } catch (err) {
        console.error(err);
      }
    }
    if (result.rows.length == 0) {

      return res.send('query send no rows');
    } else {
     
      return res.send(result.rows);
    }
  }
}

async function selectMensajes(req: any, res:any) {
  try {
    connection = await oracledb.getConnection({
      user: "SYSTEM",
      password: "0000",
      connectString: "localhost:1521/xepdb1"
    });
    console.log('connected to database on router');

    result = await connection.execute(`SELECT  * FROM MENSAJE`)

  } catch (err) {
    return res.send(err);
  } finally {
    if (connection) {
      try {

        await connection.close();
        console.log('close connection success');
      } catch (err) {
        console.error(err);
      }
    }
    if (result.rows.length == 0) {

      return res.send('query send no rows');
    } else {
     
      return res.send(result.rows);
    }
  }
}

async function selectPublicaciones(req: any, res:any) {
  try {
    connection = await oracledb.getConnection({
      user: "SYSTEM",
      password: "0000",
      connectString: "localhost:1521/xepdb1"
    });
    console.log('connected to database on router');

    result = await connection.execute(`SELECT * FROM publicacion`)

  } catch (err) {
    return res.send(err);
  } finally {
    if (connection) {
      try {

        await connection.close();
        console.log('close connection success');
      } catch (err) {
        console.error(err);
      }
    }
    if (result.rows.length == 0) {

      return res.send('query send no rows');
    } else {
     
      return res.send(result.rows);
    }
  }
}

app.listen(port, () => console.log("nodeOracleRestApi app listening on port %s!", port))
export default router;