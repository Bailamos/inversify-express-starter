import { Pool } from 'pg';
import { CamelCasePlugin, Kysely, PostgresDialect } from 'kysely';
import { defineConfig, getKnexTimestampPrefix } from 'kysely-ctl';

const config = new PostgresDialect({
  pool: async () =>
    new Pool({
      connectionString: process.env.DATABASE_URL
    })
});

const db = new Kysely({
  dialect: config,
  plugins: [new CamelCasePlugin()]
});

export default defineConfig({
  kysely: db,
  migrations: {
    migrationFolder: '../migrations',
    getMigrationPrefix: getKnexTimestampPrefix
  }
});
