import { getInstance } from '@/services/auth'

export const myAuthGuard = (to, from, next) => {
  const authService = getInstance()

  const fn = () => {
    const isAuth = authService.isAuthenticated
    if (to.name === 'home' && !isAuth) {
      return next()
    } else if (to.name === 'home' && isAuth) {
      return next('/search')
    } else {
      return next()
    }
  }

  // If loading has already finished, check our auth state using `fn()`
  if (!authService.loading) {
    return fn()
  }

  // Watch for the loading property to change before we check isAuthenticated
  authService.$watch('loading', loading => {
    if (loading === false) {
      return fn()
    }
  })
}
