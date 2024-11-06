import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { MarketTrends } from '../../interface/market-trends';

@Injectable({
  providedIn: 'root'
})
export class MarketTrendsService {

  constructor(private httpsService: HttpClient) {}
  getMarketTrendsData(): Observable<MarketTrends[]> {
    return this.httpsService.get<MarketTrends[]>('http://localhost:3000/marketTrends').pipe(
      map((data: MarketTrends[]) => {
        return data;
      })
    );
  }
  
}
