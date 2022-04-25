import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { AppService } from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // Stores the data 
  cards = [];
  cardsForHandset=[]
  cardsForWeb=[]

  // Check if the user is using the Handset mode (Phone) or Web
  isHandset:boolean=false;
  isHandsetObserver: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return true;
      }
      return false;
    })
  );
    // Creates an appservice used to get data
  constructor(private breakpointObserver: BreakpointObserver,public appservice:AppService) {

  }

  ngOnInit(){
    // Checks if user is using Handset mode or Web and set the cards size respectiviely
    this.isHandsetObserver.subscribe(currectObserverValue =>{
      this.isHandset=currectObserverValue;
      this.loadCards();
    })
    // Stores the information retrived 
    this.appservice.getHome().subscribe(
      response =>{
        this.cardsForHandset = response.handsetCards;
        this.cardsForWeb= response.webCards
        this.loadCards()
      },
      error =>{
        // Some error code
        alert("There was an error in receiving data from server!")
      }
    )
  }
  // Switches the card sizes depending on user
  loadCards(){
    this.cards = this.isHandset?this.cardsForHandset:this.cardsForWeb;
  }
  // Loads image of the card
  getImage(imageName:string):string{
    return 'url(' + 'http://localhost:3000/images/' + imageName +'.jpg' + ')';
  }
}
