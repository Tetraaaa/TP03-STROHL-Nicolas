import { Component, Input, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.less']
})
export class ProductListComponent implements OnInit {

  @Input() products:Array<any> = [];
  constructor() { 
  }

  ngOnInit(): void {
    
  }

  

}
