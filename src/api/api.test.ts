import { getPassengerDetails } from './index'
import fetchMock from "jest-fetch-mock"
import { mockPassengerDetails } from './response'

const userId = "12"

describe("Test API's ", () => {
    beforeEach(() => {
        fetchMock.resetMocks()
    })
    it("Should return 200 ", async () => {
        fetchMock.mockResponseOnce(JSON.stringify(mockPassengerDetails))
        const fetchPassDetails = getPassengerDetails(userId)
        await expect(fetchPassDetails).resolves.toEqual(mockPassengerDetails)
        expect(fetch).toBeCalledTimes(1)
        expect(fetch).toBeCalledWith(`https://api.github.com/users/${userId}`)
    })
    it("Should throw an error", async () => {
        const error = new Error("API Error")
        fetchMock.mockRejectedValueOnce(error)
        const fetchPassDetails = getPassengerDetails(userId)
        await expect(fetchPassDetails).rejects.toThrow(error)
    })
})
