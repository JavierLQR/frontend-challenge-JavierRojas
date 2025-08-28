import { useMutation } from '@tanstack/react-query'
import { logout, signup } from './auth.service'
import { useRouter } from 'next/navigation'

export const useAuthMutation = () => {
  const useRoute = useRouter()
  return useMutation({
    mutationKey: ['auth-mutation'],
    mutationFn: signup,
    retryDelay: 6000,
    retry: 3,

    onSuccess(data) {
      const { success, data: user } = data

      if (success) {
        localStorage.setItem('signup-data', JSON.stringify(user))
        return useRoute.push('/thank-you')
      }
    },

    onError(error) {
      console.error('Signup error:', error)
    },
  })
}

export const useLogoutMutation = () => {
  const useRoute = useRouter()
  return useMutation({
    mutationKey: ['logout-mutation'],
    mutationFn: logout,
    retryDelay: 6000,
    retry: 3,

    onSuccess(data) {
      const { success } = data
      if (success) {
        localStorage.removeItem('signup-data')
        return useRoute.push('/signup')
      }
    },

    onError(error) {
      console.error('Logout error:', error)
    },
  })
}
