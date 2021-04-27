import { getFruits } from '../apis/fruits'

export const SET_FRUITS = 'SET_FRUITS'

export function setFruits (fruits) {
  return {
    type: SET_FRUITS,
    fruits
  }
}

export function fetchFruits () {
  return dispatch => {
    return getFruits()
      .then(fruits => {
        dispatch(setFruits(fruits))
        return null
      })
  }
}

// import { getUsers } from '../apis/users'

// export const SET_USERS = 'SET_USERS'

// export function setUsers (users) {
//   return {
//     type: SET_USERS,
//     users
//   }
// }

// export function fetchUsers () {
//   return dispatch => {
//     return getUsers()
//       .then(users => {
//         dispatch(setUsers(users))
//         return null
//       })
//   }
// }
