import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { AssetDetails } from '../interface/asset-details';

@Injectable({
  providedIn: 'root'
})
export class SaveAssetService {

  constructor(private httpsService: HttpClient) {}
  save(data:AssetDetails): Observable<AssetDetails> {
    return this.httpsService.post<AssetDetails>('http://localhost:3000/saveAsset',data).pipe(
      map((data: AssetDetails) => {
        return data;
      })
    );
  }

}
