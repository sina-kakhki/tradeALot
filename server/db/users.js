const connection = require('./connection')

function getUsers (db = connection) {
  return db('user').select()
}

module.exports = {
  getUsers
}
