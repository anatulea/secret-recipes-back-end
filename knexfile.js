// Update with your config settings.

//require("dotenv").config();
const pg = require('pg');

pg.defaults.ssl = true,

  module.exports = {
    development: {
      client: "sqlite3",
      useNullAsDefault: true,
      connection: {
        filename: "./data/secretrecipes.db3"
      },
      migrations: {
        directory: "./data/migrations"
      },
      seeds: { directory: "./data/seeds" },
      pool: {
        afterCreate: (conn, done) => {
          conn.run("PRAGMA foreign_keys = ON", done);
        }
      }
    },

    testing: {
      client: "sqlite3",
      connection: {
        filename: "data/test.db3"
      },
      useNullAsDefault: true,
      migrations: {
        directory: "./data/migrations"
      },
      seeds: {
        directory: "./data/seeds"
      }
    },

    production: {
      client: "pg",
      useNullAsDefault: true,
      connection: process.env.DATABASE_URL,
      migrations: {
        directory: "./data/migrations"
      },
      seeds: { directory: "./data/seeds" }
    }
  };
