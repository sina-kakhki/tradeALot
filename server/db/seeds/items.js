exports.seed = function (knex, Promise) {
  return knex('items').del()
    .then(function () {
      return knex('items').insert([
        { id: 1, item_category: 'electronics', item_name: 'Super computer', location: 'Christchurch', swap: false, sell: false, img_url: '/item.png' },
        { id: 2, item_category: 'vehicle', item_name: 'Lambo', location: 'Auckalnd', swap: false, sell: false, img_url: '/item.png' }
      ])
    })
}
