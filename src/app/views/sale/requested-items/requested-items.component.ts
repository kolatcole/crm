import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-requested-items',
  templateUrl: './requested-items.component.html',
  styleUrls: ['./requested-items.component.css']
})
export class RequestedItemsComponent implements OnInit {

  products:any[]
  loading = false
  loadingReport = false

  constructor(
    private productService:ProductService
  ) { }

  ngOnInit(): void {
    this.getBestSellingProducts()
  }

  getBestSellingProducts(){
    this.loadingReport = true
    this.productService.getBestSellingProduct().subscribe(data=>{
      this.products = <any[]>data
      this.loadingReport = false
    },
      err=>{
        this.loadingReport = false
      })
  }

}
