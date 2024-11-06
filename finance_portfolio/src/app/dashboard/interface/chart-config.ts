interface ChartDataset {
    label: string;
    data: number[];
    borderWidth: number;
    backgroundColor: string[];
    borderColor: string[];
  }
  
  interface ChartOptions {
    responsive: boolean;
    title: {
      display: boolean;
      text: string;
    };
    scales: {
      yAxes: {
        ticks: {
          beginAtZero: boolean;
        };
      }[];
    };
  }
  
  export interface ChartConfig {
    type: string;
    data: {
      labels: string[];
      datasets: ChartDataset[];
    };
    options: ChartOptions;
  }