const connection = require('./connection')

module.exports = {
  getUsers,
  getUserById,
  getItems,
  getUserItems,
  addItemToUser,
  searchItems
}

function getUsers (testDb) {
  const db = testDb || connection
  return db('users').select().orderBy('name')
}

function getUserById (id, db = connection) {
  return db('users').select().where('users.id', id)
}

function getItems (testDb) {
  const db = testDb || connection
  return db('items').select()
}

function searchItems (name, db = connection) {
  return db('items').where('name', 'like', `%${name}%`)
}

function getUserItems (username, testDb) {
  const db = testDb || connection
  return db('users')
    .where('username', username)
    .select('users.id').first().then(res => {
      return db('items')
        .join('userItems', 'userItems.item_id', 'items.id')
        .where('userItems.user_id', res.id)
        .select().orderBy('name')
    })
    .catch(err => {
      console.log(err)
    })
}

function addItemToUser (items, user, testDb) {
  const db = testDb || connection
  return db('users')
    .where('username', user.username)
    .select('users.id').first().then(user => {
      return db('userItems')
        .where('user_id', user.id) 
        .where('item_id', items.id).then((rows) => {
          if (rows.length === 0) {
            return db('userItems').insert({ item_id: items.id, user_id: user.id })
          }
        })
        .catch(err => {
          console.log(err)
        })
    })
}
