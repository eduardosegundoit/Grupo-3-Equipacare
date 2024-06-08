import knex from "knex";
import dotenv from 'dotenv';
dotenv.config();


const knexConfig = {
    client: 'mysql2',
    connection: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        database: process.env.DB_NAME,
        password: process.env.DB_PASSWORD,
        user: process.env.DB_USER
    },
    pool: {
        min: 2,
        max: 10
    }
  };

  const db = knex(knexConfig);

  db.raw("select version()").then(() => {
    console.log('Database connection established');
  }).catch((err) => {
    console.error('Database connection failed');
    console.error(err);
  });

  export default db;

