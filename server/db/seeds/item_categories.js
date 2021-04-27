exports.seed = function (knex, Promise) {
  return knex('item_categories').del()
    .then(function () {
      return knex('item_categories').insert([
        { id: 1, item_category: 'electronics' },
        { id: 2, item_category: 'vehicles' },
        { id: 3, item_category: 'home & living' },
        { id: 4, item_category: 'cosmetics' },
        { id: 4, item_category: 'clothing & fashion' },
        { id: 6, item_category: 'mobile phones' },
        { id: 7, item_category: 'computers' }
      ])
    })
}
