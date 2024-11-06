import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AssetAllocation } from '../../interface/asset-allocation';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssetAllocationService {

  constructor(private httpsService: HttpClient) {}
  getAssetAllocation(): Observable<AssetAllocation[]> {
    return this.httpsService.get<AssetAllocation[]>('http://localhost:3000/assetAllocation').pipe(
      map((data: AssetAllocation[]) => {
        return data;
      })
    );
  }
}
