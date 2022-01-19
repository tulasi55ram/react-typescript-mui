import { IMakeRequest } from './types'

export const makeRequest = async ({ url, data = null, type = 'GET' }: IMakeRequest) => {
  try {
    if (type === 'GET') {
      const req = await fetch(url)
      return await req.json()
    }
  } catch (e) {
    throw new Error('API Error')
  }
}

// Get Passenger Details
export const getPassengerDetails = async (userId: string) => {
  const url = `https://api.github.com/users/${userId}`
  const data = await makeRequest({ url })
  return data
}

// Get Passengers By Pagination
export const getPassengersByPagination = async () => {
  const url = `https://api.instantwebtools.net/v1/passenger?page=0&size=10`
  const data = await makeRequest({ url })
  return data
}
