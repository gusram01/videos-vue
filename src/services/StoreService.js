export const actualUser = () =>
  JSON.parse(sessionStorage.getItem('AppVu3Actu4lUsER'))

export const users = () => {
  const strUsers = localStorage.getItem('AppVu3')
  if (!strUsers) {
    return []
  }

  return JSON.parse(strUsers)
}

export const clearSession = () => sessionStorage.removeItem('AppVu3Actu4lUsER')

export const saveUsers = users => {
  localStorage.setItem('AppVu3', JSON.stringify(users))
}

export const saveSession = user => {
  sessionStorage.setItem('AppVu3Actu4lUsER', JSON.stringify(user))
}
