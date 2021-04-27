exports.seed = function (knex, Promise) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        { id: 1, username: 'fessant', hash: 'fessanthash', first_name: 'Cute', last_name: 'Birdi', location: 'Christchurch', email: 'cute.birdi@fessant.com' },
        { id: 2, username: 'sina', hash: 'sinahash', first_name: 'Sina', last_name: 'Kakhki', location: 'Auckalnd', email: 'sina.kakhki@dev.com' }
      ])
    })
}
