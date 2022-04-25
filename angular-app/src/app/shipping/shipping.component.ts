import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  shipping = []

  constructor(public appService:AppService) { }
  // Subscribes to API and retrives data
  ngOnInit(): void {
    this.appService.getShipping().subscribe(
      response =>{
        this.shipping=response.shipping
        console.log(this.shipping)
      },
            // In case of error
      error =>{
        alert("There was an error in receiving data from server!")
      }
    )
  }

}
