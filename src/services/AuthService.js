import { saveSession, saveUsers, users } from '.'

export const login = user => {
  const { username, password } = user
  const id = `u${username}p${password}`
  if (!username || !password) {
    return
  }

  const list = users()
  const actual = list.find(item => item.id === id)
  if (!actual) {
    const newUser = {
      username,
      password,
      id,
      movies: []
    }
    list.push(newUser)
    saveUsers(list)
    saveSession(newUser)
  } else {
    saveSession(actual)
  }
}
