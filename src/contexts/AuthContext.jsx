import React, { createContext, useContext, useEffect, useState } from 'react'
import httpClient from '../utils/httpClient'
import { useApi } from '../hooks'

const AuthContext = createContext({
  token: null,
  user: null,
  setToken: () => {},
})

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(window.localStorage.getItem('auth:user'))
  const [user, setUser] = useState(null)
  const { data, makeRequest, loading } = useApi(() => httpClient.get('/me'))

  useEffect(() => {
    if (!token) {
      setUser(null)
      window.localStorage.removeItem('auth:user')
      return
    }
    window.localStorage.setItem('auth:user', token)
    makeRequest()
  }, [token])

  useEffect(() => {
    if (!data) return
    setUser(data)
  }, [data])

  return (
    <AuthContext.Provider
      value={{
        token,
        setToken,
        user,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => ({ ...useContext(AuthContext) })
