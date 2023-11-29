const endpoints = [
  { name: 'fetchCustomer', route: '/admin/customers', method: 'get' },
]

export const getEndpoint = (routeName, routeParams = {}) => {
  const endpointsCopy = JSON.parse(JSON.stringify(endpoints))
  const endpoint = endpointsCopy.find(row => row.name === routeName)
  if (!endpoint) throw new Error(`Invalid endpoint name '${routeName}'.`)
  for (let paramName in routeParams) {
    endpoint.route = endpoint.route.replace(`{${paramName}}`, routeParams[paramName])
  }
  return endpoint
}
