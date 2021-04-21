exports.seed = function (knex, Promise) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {id: 1, username: 'Fessant', first_name: 'Cute', last_name: 'Birdi', email: 'cute.birdi@fessant.com'},
        {id: 2, username: 'sina', first_name: 'Sina', last_name: 'Kakhki', email: 'sina.kakhki@dev.com'}
      ])
    })
}
