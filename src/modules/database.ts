import oracledb from "oracledb";
export let connection: any;


export async function CheckConnection() {
  try {
    connection = await oracledb.getConnection({ user: "SYSTEM", password: "0000", connectionString: "localhost:1521/xepdb1" });
    console.log("Successfully connected to Oracle Database");

  } catch (err) {
    console.error(err);
    
  } finally {
    if (connection) {
      try {
        await connection.close();
        console.log('close connection success');
      } catch (err) {
        console.error(err);
      }
    } }  }

    


