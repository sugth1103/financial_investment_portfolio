export interface AssetAllocation {
    assetType: string;
    percentage: number;
    details: StockDetail[]; 
}

interface StockDetail {
    name: string;
    symbol: string;
    quantity: number;
    currentValue: number;
  }
  