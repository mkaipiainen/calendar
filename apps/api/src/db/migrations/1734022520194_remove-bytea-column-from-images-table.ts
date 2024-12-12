import type { Kysely } from 'kysely'

export async function up(db: Kysely<any>): Promise<void> {
	await db.schema.alterTable('image').dropColumn('data').addColumn('url', 'varchar').execute();
}

export async function down(db: Kysely<any>): Promise<void> {
	await db.schema.alterTable('image').dropColumn('url').addColumn('data', 'bytea').execute();
}
