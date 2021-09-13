export interface CurrencyListing {
  success: boolean,
  timestamp: number,
  base: string,
  date: string,
  rates: {
    USD: number,
    BRL: number
  }
}

export const emptyCurrencyListing = {
  success: false,
  timestamp: 0,
  base: "",
  date: "",
  rates: {
    USD: 0,
    BRL: 0
  }
}
