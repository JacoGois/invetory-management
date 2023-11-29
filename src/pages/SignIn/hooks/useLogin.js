import { getEndpoint } from '../../../endpoints'
import { useApi } from '../../../hooks'
import httpClient from '../../../utils/httpClient'

export const useLogin = () => {
  const { data, loading, error, makeRequest } = useApi(params => {
    const { route, method } = getEndpoint('loginRequest')
    return httpClient[method](route, { ...params })
  })

  return {
    datalogin: data,
    loadinglogin: loading,
    errorlogin: error,
    loginRequest: makeRequest,
  }
}
