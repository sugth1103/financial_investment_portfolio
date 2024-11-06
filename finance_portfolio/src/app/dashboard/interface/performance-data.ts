
export interface PerformanceData {
    lastUpdated:string;
    owner:string;
    performanceData:PerformanceDatas
}

export interface PerformanceDatas {
  benchmarkPerformance: number[];
  portfolioPerformance:number[];portfolioName:string;
  owner: string;
  lastUpdated: string;
  performanceData: PerformanceData;
}
