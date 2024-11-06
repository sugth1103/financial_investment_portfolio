import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { PerformanceData } from '../../interface/performance-data';

@Injectable({
  providedIn: 'root'
})
export class PortfolioPerformanceService {

  constructor(private httpsService: HttpClient) {}
  getPortFolioPerformanceData(): Observable<PerformanceData> {
    return this.httpsService.get<PerformanceData>('http://localhost:3000/portFolioPerformance').pipe(
      map((data: PerformanceData) => {
        return data;
      })
    );
  }
}
