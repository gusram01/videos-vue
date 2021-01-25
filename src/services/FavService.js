import { saveUsers, getData } from '.'

export const isFav = (movie, email) =>
  getData()
    .then(data => {
      if (!data) {
        return [false, null]
      }
      const actualUser = data.find(item => item.username === email)
      if (!actualUser) {
        return [false, null]
      }
      const index = actualUser.movies.findIndex(
        storedMovie => storedMovie.id === movie.id
      )
      return index >= 0
        ? [true, [index, actualUser]]
        : [false, [index, actualUser]]
    })
    .catch(console.error)

export const changeFav = async (movie, email) => {
  const [flag, actual] = await isFav(movie, email)

  if (!flag) {
    actual[1].movies.push(movie)
  } else {
    actual[1].movies.splice(actual[0], 1)
  }
  saveUsers(actual[1])
    .then(() => {
      console.log('changing')
    })
    .catch(err => {
      console.log('error on save fav', err)
    })
}
