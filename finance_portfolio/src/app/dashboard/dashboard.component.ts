import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import Chart from 'chart.js/auto';
import { AssetAllocationService } from './service/asset-allocation/asset-allocation.service';
import { AssetAllocation } from './interface/asset-allocation';
import { ChartConfiguration, ChartData, ChartOptions, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { forkJoin } from 'rxjs';
import { MarketTrendsService } from './service/market-trends/market-trends.service';
import { MarketTrends } from './interface/market-trends';
import { PortfolioPerformanceService } from './service/portfolio-performance/portfolio-performance.service';
import { PerformanceData, PerformanceDatas } from './interface/performance-data';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet,MatToolbarModule,MatCardModule,MatGridListModule,BaseChartDirective],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  constructor(private assetAllocationService: AssetAllocationService,private marketTrendsService:MarketTrendsService,private portFolioPerformanceData:PortfolioPerformanceService) { }
  assetManagementChartData:any=[];
  performanceMetricsChart:any=[];
  portfolioPerformanceChart:any=[];
  lineChartOptions!:ChartConfiguration['options'];
  lineChartData!:ChartData<'line'>;
  portFolioLineChartData!:ChartData<'line'>;
  lineChartType:ChartType = 'line';
  title = 'financial_portfolio';
  public lineChartLabels: any = [];
  public PerformanceLineChartOptions: ChartOptions = {
    responsive: true,
  };
  
  ngOnInit():void{
    forkJoin([this.assetAllocationService.getAssetAllocation(),this.marketTrendsService.getMarketTrendsData(),this.portFolioPerformanceData.getPortFolioPerformanceData()]).subscribe(([assetAllocationData,marketTrendsData,portFolioPerformanceData]) => {
      this.assetManagementChart(assetAllocationData);
      this.marketTrendsChart(marketTrendsData);
      this.portFolioPerformance(portFolioPerformanceData.performanceData);
      this.performanceMetrics();
    });
    
  }
  portFolioPerformance(portFolioPerformanceData:PerformanceDatas){
    const benchmarkPerformance = portFolioPerformanceData?.benchmarkPerformance;
    const portfolioPerformance = portFolioPerformanceData?.portfolioPerformance;
    this.portfolioPerformanceChart = new Chart('portfolioPerformanceChart', {
      type: 'bar',
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
          {
            label: "Benchmark",
            backgroundColor: "orange",
            borderWidth: 1,
            borderColor: "black",
            data: benchmarkPerformance
          },
          {
            label: "Asset Performance",
            backgroundColor: "yellow",
            borderWidth: 1,
            borderColor: "black",
            data: portfolioPerformance
          }
        ]
      },
      options: {
        maintainAspectRatio: false,
        scales: {
          // We use this empty structure as a placeholder for dynamic theming.
          x: {title: {
            display: true,
            text: 'periods' // Name of x-axis
        }},
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Total' // Name of x-axis
          },
          }
        }
      }
    });
  }
  assetManagementChart(data:AssetAllocation[]){
    const stockDetails=data[0].details;
    const assetTypeList = stockDetails.map((data) => data.name);
    const quantity =stockDetails.map((data) => data.quantity);
    this.assetManagementChartData = new Chart('assetManagementChartData', {
      type: 'bar',
      data: {
        labels: assetTypeList,
        datasets: [
          {
            label: 'Asset Allocation',
            data: quantity,
            borderWidth: 1,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 205, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              
            ],
            borderColor: [
              'rgb(255, 99, 132)',
              'rgb(255, 159, 64)',
              'rgb(255, 205, 86)',
              'rgb(75, 192, 192)',
              
            ],
          },
        ],
        
      },
      options: {
       scales: {
        // We use this empty structure as a placeholder for dynamic theming.
        x: {title: {
          display: true,
          text: 'Assets' // Name of x-axis
      }},
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Shares in Quantity' // Name of x-axis
        },
        }
      }
      },
      
    });
   
  }
  performanceMetrics(){
    this.performanceMetricsChart = new Chart('performanceMetricsChart', {
      type: 'bar',
      data: {
        labels: ['Apple Inc', 'Microsoft Corp.', 'Amazon.com Inc.', 'Alphapet Inc.'],
        datasets: [
          {
            label: 'Performance Metrics',
            data: [12, 19, 3, 5],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          // We use this empty structure as a placeholder for dynamic theming.
          x: {title: {
            display: true,
            text: 'Assets' // Name of x-axis
        }},
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Growth in Percentage' // Name of x-axis
          },
          }
        }
      },
    });
  }
  marketTrendsChart(MarketTrendsData:MarketTrends[]){
    const date = MarketTrendsData.map((data) => data.date);
    const percentageChange = MarketTrendsData.map((data) => data.percentageChange);
     this.lineChartData= {
      datasets: [
        {
          data: percentageChange,
          label: 'Market Trends',
          backgroundColor: 'rgba(255,0,0,0.3)',
          borderColor: 'red',
        }
      ],
      labels: date
    };
  
    this.lineChartOptions = {
      elements: {
        line: {
          tension: 0.5
        }
      },
      scales: {
        // We use this empty structure as a placeholder for dynamic theming.
        x: {title: {
          display: true,
          text: 'Monthly' // Name of x-axis
      }},
        y: {
          min: -10,
          title: {
            display: true,
            text: 'Percentage' // Name of x-axis
        },
        }
      }
    };
  
    this.lineChartType = 'line';
  
  }
 
  }
  
