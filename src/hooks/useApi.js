import { useState } from 'react'

export const useApi = requester => {
  const [data, setData] = useState(null)
  const [status, setStatus] = useState(null)
  const [statusCode, setStatusCode] = useState(null)
  const [meta, setMeta] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const makeRequest = async (...args) => {
    setLoading(true)
    setError(null)

    try {
      const result = await requester(...args)
      setData(result.data.data)
      setStatus(result.data.status)
      setStatusCode(result.status)
      setMeta(result.data.meta)
      return result
    } catch (err) {
      if (!err.response) throw err
      setStatus(err.response.data.status)
      setError(err.response.data.data)
      setMeta(err.response.data.meta)
      setStatusCode(err.response.status)
      return err
    } finally {
      setLoading(false)
    }
  }

  return {
    data,
    status,
    statusCode,
    meta,
    error,
    loading,
    makeRequest,
  }
}
