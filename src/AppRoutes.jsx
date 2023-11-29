import React, { Fragment } from 'react'
import { Routes, Route } from 'react-router-dom'
import { routes } from './routes'
import { Layout } from './pages/Layout'
import { NotFoundPage } from './pages/NotFoundPage'
import { PrivateRoute } from './components/PrivateRoute'

export const AppRoutes = () => (
  <Routes>
    {routes.map(route => {
      const { path, pageComponent, enabled = true, isPublic = false, layoutComponent = Layout } = route
      const AppLayout = layoutComponent
      const PageComponent = pageComponent
      const PrivateOrPublicRoute = isPublic ? Fragment : PrivateRoute

      return (
        enabled && (
          <Route
            key={path}
            path={path}
            element={
              <PrivateOrPublicRoute>
                <AppLayout>
                  <PageComponent />
                </AppLayout>
              </PrivateOrPublicRoute>
            }
          />
        )
      )
    })}
    <Route path='*' element={<NotFoundPage />} />
  </Routes>
)
