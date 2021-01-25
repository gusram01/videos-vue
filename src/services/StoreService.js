import * as localforage from 'localforage'

const getData = async () => {
  const data = await getUsers().catch(err => {
    console.error(err)
  })
  if (!data) {
    return []
  }
  return data
}

const initUser = async email => {
  await saveUsers({ username: email, movies: [] })
}

const getUsers = () => {
  return localforage.getItem('AppVu3')
}

const saveUsers = async user => {
  const data = await getData()
  const index = data.findIndex(item => item.username === user.username)
  if (index < 0) {
    data.push(user)
  } else {
    data.splice(index, 1, user)
  }
  await localforage.setItem('AppVu3', data).catch(err => {
    console.error(err)
  })
}

export { getUsers, saveUsers, initUser, getData }
