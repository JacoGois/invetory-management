import React from 'react'
import { useLocation } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import classNames from 'classnames'
import { Loading } from './Loading'
import { useAuth } from '../contexts'

export const ScreenLoading = () => {
  const { loading } = useAuth()

  return (
    <div
      className={classNames(
        'flex flex-col w-screen h-screen justify-center none items-center bg-gray-200 transition-all duration-300 ease-in-out',
        { 'opacity-100': loading, 'opacity-0 hide': !loading }
      )}
    >
      <Loading width={80} />
    </div>
  )
}

export const PrivateRoute = ({ children }) => {
  const { token, loading, user } = useAuth()
  const location = useLocation()

  if (!token) return <Navigate to='/sign-in' replace state={{ from: location }} />
  if (loading || !user) return <ScreenLoading />
  return children
}
