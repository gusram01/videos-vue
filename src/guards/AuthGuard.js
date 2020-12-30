import { actualUser } from '../services'

export const authGuard = (to, from, next) => {
  const user = actualUser()
  return !user ? next({ name: 'home' }) : next()
}
