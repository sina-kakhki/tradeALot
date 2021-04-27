exports.up = function (knex, Promise) {
  return knex.schema.createTable('items', (table) => {
    table.increments('id')
    table.string('item_category')
    table.string('item_name')
    table.string('location')
    table.boolean('swap')
    table.boolean('sell')
    table.string('img_url').defaultTo('/item.png')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('items')
}
