import * as localforage from 'localforage'

const getUsers = async () => {
  return await localforage.getItem('AppVu3')
}

const initUser = async email => {
  const data = await getData()

  const index = data.findIndex(item => item.username === email)

  if (index < 0) {
    await saveUsers({ username: email, movies: [] })
  }
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
    return false
  })
  return true
}

const getActualUser = async email => {
  const data = await getData()
  return data.filter(item => item.username === email)[0]
}

const getData = async () => {
  const data = await getUsers().catch(err => {
    console.error(err)
  })
  if (!data) {
    return []
  }
  return data
}

export { getUsers, saveUsers, initUser, getData, getActualUser }
