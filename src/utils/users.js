const users = []

const addUser = ({ id, userName, room }) => {
  userName = userName.trim().toLowerCase()
  room = room.trim().toLowerCase()

  if (!userName || !room) {
    return {
      error: 'Username & Room are required!'
    }
  }

  const existingUser = users.find((user) => {
    return user.room === room && user.userName === userName
  })

  if (existingUser) {
    return {
      error: 'Username is in use!'
    }
  }

  const user = { id, userName, room }
  users.push(user)
  return { user }
}

const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id)

  if (index !== -1) {
    return users.splice(index, 1)[0]
  }
}

addUser({
  id: 22,
  userName: 'Copper',
  room: 'mountain'
})

console.log(users)

const removedUser = removeUser(22)

console.log(removedUser)
console.log(users)
