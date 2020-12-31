import { actualUser, saveSession, saveUsers, users } from '.'

export const isFav = movie => {
  const actual = actualUser()
  if (!actual) {
    return [false, null]
  }

  const flag = actual.movies.findIndex(item => item.id === movie.id)
  return flag >= 0 ? [true, [flag, actual]] : [false, [flag, actual]]
}

export const changeFav = movie => {
  const [flag, actual] = isFav(movie)

  if (!flag) {
    actual[1].movies.push(movie)
  } else {
    console.log(flag)
    console.log(actual)
    actual[1].movies.splice(actual[0], 1)
  }
  console.log(actual)

  const storedUsers = users()
  const index = storedUsers.findIndex(item => item.id === actual[1].id)

  storedUsers.splice(index, 1, actual[1])
  saveUsers(storedUsers)
  saveSession(actual[1])
}
