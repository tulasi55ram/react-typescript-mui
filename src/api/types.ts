export interface IMakeRequest {
  url: string
  data?: any
  type?: string
}

export interface IPassengerDetails {
  [key: string]: string | number | boolean | null
}

export interface IPassengerAirline {
  [key: string]: string | number
}
export interface IPassengerData {
  _id: string
  name: string
  trips: number
  airline: IPassengerAirline[]
}

export interface IPassengers {
  totalPassengers: number
  totalPages: number
  data: IPassengerData[]
}
