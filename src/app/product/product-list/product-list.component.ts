import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ProductService } from 'src/app/entities/product/product.service';
import { IProduct } from 'src/app/entities/product/product.model';
import {UserService} from 'src/app/entities/user/user.service'
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnChanges {

  products: Array<IProduct> = [];
  @Input() productToDisplay: IProduct = null;
  user : boolean = false;

  constructor(protected productService: ProductService, protected userService: UserService) {
    this.user = this.userService.user
    console.log(this.user)
   }

  // Load all the products when starting the view.
  ngOnInit(): void {
    this.loadAll();
  }

  // If new product created, we add it to the list.
  ngOnChanges(): void {
    if (this.productToDisplay !== null) {
      this.products.push(this.productToDisplay);
    }
  }

  // Delete a product. 
  delete(id: string) {
    this.productService.delete(id).then((result: any) => this.loadAll());
  }

   buy(){}

  private check(){
    if(this.user==true){
      return true
    }else{
      return false
    }
  }

  // Load all products.
  private loadAll() {
    this.productService
      .get()
      .then((result: Array<IProduct>) => {
        this.products = result;
      });
  }

}
