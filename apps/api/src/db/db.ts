import pg from 'pg';
import { Kysely, PostgresDialect } from 'kysely';
import { type Database } from './types/database';
const dialect = new PostgresDialect({
  pool: new pg.Pool({
    connectionString: process.env.CONNECTION_STRING,
  })
})

export const db = new Kysely<Database>({
  dialect,
})
