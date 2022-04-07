import { Component, OnInit } from '@angular/core';
import { ExampleService } from '../example.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any;
  errMessage: string = "";
  constructor(private _service: ExampleService) { }

  ngOnInit(): void {
  }

  getProducts(){
    this._service.getProducts().subscribe({
      next: data => this.products = data,
      error: err => this.errMessage = err 
    })
  }
}
