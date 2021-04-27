exports.up = function (knex, Promise) {
  return knex.schema.createTable('item_categories', (table) => {
    table.integer('id')
    table.string('item_category')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('item_categories')
}
