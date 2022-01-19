import { getPassengerDetails, getPassengersByPagination } from './index'
import fetchMock from 'jest-fetch-mock'
import { mockPassengerDetails } from './response'

const userId = '12'

describe("Test API's ", () => {
  describe("Test getPassenderDetails API ", () => {
    beforeEach(() => {
      fetchMock.resetMocks()
    })
    it('Should return 200 ', async () => {
      fetchMock.mockResponseOnce(JSON.stringify(mockPassengerDetails))
      const fetchData = getPassengerDetails(userId)
      await expect(fetchData).resolves.toEqual(mockPassengerDetails)
      expect(fetch).toBeCalledTimes(1)
      expect(fetch).toBeCalledWith(`https://api.github.com/users/${userId}`)
    })
    it('Should throw an error', async () => {
      const error = new Error('API Error')
      fetchMock.mockRejectedValueOnce(error)
      const fetchPassDetails = getPassengerDetails(userId)
      await expect(fetchPassDetails).rejects.toThrow(error)
    })
  })
  describe("Test getPassengersByPagination API", () => {
    beforeEach(() => {
      fetchMock.resetMocks()
    })
    it('Should return 200 ', async () => {
      fetchMock.mockResponseOnce(JSON.stringify(mockPassengerDetails))
      const fetchDataByPagination = getPassengersByPagination()
      await expect(fetchDataByPagination).resolves.toEqual(mockPassengerDetails)
      expect(fetch).toBeCalledTimes(1)
      expect(fetch).toBeCalledWith(`https://api.instantwebtools.net/v1/passenger?page=0&size=10`)
    })
    it('Should throw an error', async () => {
      const error = new Error('API Error')
      fetchMock.mockRejectedValueOnce(error)
      const fetchPassDetails = getPassengerDetails(userId)
      await expect(fetchPassDetails).rejects.toThrow(error)
    })
  })
})
