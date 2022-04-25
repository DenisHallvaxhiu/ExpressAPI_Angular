import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  about = [];
  constructor(public appService:AppService) { }
  // Subscribes to API and retrives data
  ngOnInit(): void {
    this.appService.getAbout().subscribe(
      response =>{
        this.about=response.about
        console.log(this.about)
      },
      // In case of error
      error =>{
        alert("There was an error in receiving data from server!")
      }
    )
  }
  // Loads Image to the background of div
  getImage(imageName:string):string{
    return 'url(' + 'http://localhost:3000/images/' + imageName +'.jpg' + ')';
  }
}
