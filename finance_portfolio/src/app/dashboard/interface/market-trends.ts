
interface Details {
    index: string;
    value: number;
  }
  
  export interface MarketTrends {
    date: string;
    trend: string;
    percentageChange: number;
    details: Details;
  }
