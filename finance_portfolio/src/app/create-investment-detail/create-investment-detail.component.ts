import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { SaveAssetService } from './service/save-asset.service';
import { AssetDetails } from './interface/asset-details';

@Component({
  standalone : true,
  selector: 'app-asset-form',
  templateUrl:'./create-investment-detail.component.html',
  styleUrls: ['./create-investment-detail.component.scss'],
  imports: [ReactiveFormsModule,MatInputModule]
})
export class CreateInvestmentDetailComponent implements OnInit {
  assetForm!: FormGroup;
  success=false
  assetDetail!:AssetDetails;
  constructor(private fb: FormBuilder,private httpClient:HttpClient,private saveAssetService:SaveAssetService) { }

  ngOnInit(): void {
    this.assetForm = this.fb.group({
      assetType: ['', Validators.required],
      quantity: ['', [Validators.required, Validators.min(1)]],
      purchasePrice: ['', [Validators.required, Validators.min(1)]],
      date: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.assetForm.valid) {
      this.saveAssetService.save(this.assetForm.value).subscribe((data:AssetDetails) => {
        this.assetForm.reset();
        this.assetDetail=data;
        this.success=true
        setTimeout(()=>{this.success=false},5000);
      })
    } else {
      console.log('Form is invalid');
    }
  }
}