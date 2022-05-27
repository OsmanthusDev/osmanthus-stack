import SQLite from 'sqlite3';


export const mysql = {
  dialect: 'mysql',
  host: 'localhost',
  port: 3306,
  database: 'app',
  username: 'app',
  password: 'app',
  dialectOptions: {
    // Your mysql2 options here
  }
};


export const sqlite = {
  dialect: 'sqlite',
  storage: 'database.db', // 或 ':memory:'
  dialectOptions: {
    // Your sqlite3 options here
    // for instance, this is how you can configure the database opening mode:
    mode: SQLite.OPEN_READWRITE | SQLite.OPEN_CREATE | SQLite.OPEN_FULLMUTEX,
  },
};


export const postgres = {
  dialect: 'postgres',
  host: 'localhost',
  port: 3306,
  database: 'app',
  username: 'app',
  password: 'app',
  dialectOptions: {
    // Your pg options here
  }
};

export const mssql = {
  dialect: 'mssql',
  host: 'localhost',
  port: 3306,
  database: 'app',
  username: 'app',
  password: 'app',
  dialectOptions: {
    // Observe the need for this nested `options` field for MSSQL
    options: {
      // Your tedious options here
      useUTC: false,
      dateFirst: 1
    }
  }
};

export const mariadb = {
  dialect: 'mariadb',
  host: 'localhost',
  port: 3306,
  database: 'app',
  username: 'app',
  password: 'app',
  dialectOptions: {
    // Your mariadb options here
    // connectTimeout: 1000
  }
};
