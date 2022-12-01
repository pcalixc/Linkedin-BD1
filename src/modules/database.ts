import oracledb from "oracledb";


export async function Database() {

    let connection;
    try {
  
      connection = await oracledb.getConnection({ user: "SYSTEM", password: "0000", connectionString: "localhost:1521/xepdb1" });
      console.log("Successfully connected to Oracle Database");
      connection.execute(`INSERT INTO Categoria (id, nombre) VALUES (19, 'hsdhkhdkahs')`);
      //connection.commit();
      let data = await connection.execute(`SELECT * FROM categoria`);
      
      let data1=JSON.parse((JSON.stringify(data.rows)));
      //console.log(data1);
  
    } catch (err) {
      console.error(err);
    } finally {
      if (connection) {
        try {
          await connection.close();
        } catch (err) {
          console.error(err);
        }
      }
    }
    
  }





  
