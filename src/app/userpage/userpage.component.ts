import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { isPromise } from '@angular/compiler/src/util';
import { StatusService } from '../shared/status.service';
import { IProduct } from '../entities/product/product.model';

@Component({
  selector: 'app-Userpage',
  templateUrl: './Userpage.component.html',
  styleUrls: ['./Userpage.component.css']
})
export class UserpageComponent implements OnInit {
  title = 'node-express-angular';
  status = 'DOWN';
  createdProduct: IProduct = null;

  constructor(protected statusService: StatusService) { }

  // Get the server status when starting the view.
  ngOnInit() {
    this.statusService
      .getStatus()
      .then((result: any) => {
        this.status = result.status;
      });
  }

  // Get the new product created.
  onCreatedProduct(createdProduct: IProduct) {
    this.createdProduct = createdProduct;
  }


  

}


