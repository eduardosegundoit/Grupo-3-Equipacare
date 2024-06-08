/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function(knex) {
    return knex.schema.createTable('users', table => {
        table.bigIncrements('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable().unique();
        table.integer('phone').notNullable();.unique();
        table.integer('cep').notNullable();
        table.string('address').notNullable();
        table.string('cnpj');
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function(knex) {
    return knex.schema.dropTable('users');
};
