
exports.up = function(knex, Promise) {
  return knex.schema.createTable('cards', (table) => {
    table.increments();
    table.string('code').notNullable().unique();
    table.string('shape').notNullable();
    table.string('color').notNullable();
    table.string('filling').notNullable();
    table.string('quantity').notNullable();
    table.string('image').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('cards');
};
