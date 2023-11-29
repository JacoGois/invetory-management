import axios from 'axios'
import Swal from 'sweetalert2'

const httpClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})

httpClient.interceptors.request.use(
  async config => {
    const token = window.localStorage.getItem('auth:user')
    if (token !== null) config.headers.Authorization = `Bearer ${token}`
    return config
  },
  error => Promise.reject(error)
)

httpClient.interceptors.response.use(undefined, error => {
  if ([401, 403].includes(error.response.status)) {
    Swal.fire({
      title: 'Sessão expirada',
      text: 'Sua sessão foi expirada. Faça login novamente.',
      icon: 'error',
      confirmButtonText: 'Fazer login',
      backdrop: 'rgba(0,0,0,0.9)',
    }).then(() => {
      window.localStorage.removeItem('auth:user')
      window.location.href = import.meta.env.VITE_BASE_URL + '/sign-in'
    })
  }
  return Promise.reject(error)
})

export const addHeader = (name, value) => {
  httpClient.defaults.headers.common[name] = value
}

export const removeHeader = name => {
  delete httpClient.defaults.headers.common[name]
}
  
export default httpClient
