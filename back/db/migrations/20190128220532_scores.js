
exports.up = function(knex, Promise) {
  return knex.schema.createTable('scores', (table) => {
    table.increments();
    table.string('userName').notNullable();
    table.integer('score').notNullable();
    table.integer('nbPlayer').notNullable();
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('scores');
};
