import dotenv from 'dotenv';
dotenv.config();

export default {
    development: {
      client: process.env.DB_CLIENT || "mysql2",
      connection: {
        host: process.env.DB_HOST || "localhost", 
        user: process.env.DB_USER || "root",
        password: process.env.DB_PASS || "dnc",
        database: process.env.DB_NAME || "dnc3",
        port: process.env.DB_PORT || 3306
      },
      migrations: {
        directory: './migrations'
      },
      seeds: {
        directory: './seeds'
      }
    },
    production: {
      client: process.env.DB_CLIENT || "mysql2",
      connection: {
        host: process.env.DB_HOST || "localhost", 
        user: process.env.DB_USER || "root",
        password: process.env.DB_PASS || "dnc",
        database: process.env.DB_NAME || "dnc3",
        port: process.env.DB_PORT || 3306
      },
      migrations: {
        directory: './migrations'
      },
      seeds: {
        directory: './seeds'
      }
    }

};
