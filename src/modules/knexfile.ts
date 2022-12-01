


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

  export default moduleKnexfile;

