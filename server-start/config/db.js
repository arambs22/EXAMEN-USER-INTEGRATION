// Crear pool para la conexion a la base de datos
const Pool = require('pg').Pool;

const db = new Pool({
  user: 'catedratec',
  password: 'aram',
  host: 'localhost',
  port: 5432,
  database: 'catedraapi',
});

module.exports = { db };
