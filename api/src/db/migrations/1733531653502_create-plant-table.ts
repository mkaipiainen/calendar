import { Kysely, sql } from 'kysely';

export async function up(db: Kysely<any>): Promise<void> {
	db.schema.createTable('plant')
    .addColumn('id', 'uuid', (col) => col.primaryKey().defaultTo(sql`gen_random_uuid()`))
    .addColumn('name', 'varchar', (col) => col.notNull())
    .addColumn('description', 'text')
    .addColumn('watering_frequency', 'integer')
    .addColumn('last_watered', 'timestamp')
    .addColumn('date_created', 'timestamp', (col) => col.defaultTo(sql`now()`))
    .addColumn('date_updated', 'timestamp', (col) => col.defaultTo(sql`now()`))
    .execute()
}

export async function down(db: Kysely<any>): Promise<void> {
  db.schema.dropTable('plant').execute();
}