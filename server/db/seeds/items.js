exports.seed = function (knex, Promise) {
  return knex('items').del()
    .then(function () {
      return knex('items').insert([
        {id: 1, itemtypye: 'computer', item_name: 'Super computer', swap: false, sell: false},
        {id: 2, itemtype: 'vehicle', item_name: 'Lambo', swap: false, sell: false}
      ])
    })
}
