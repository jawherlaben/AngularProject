import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TP1';
  parentBackgroundColor: string = 'powderblue'; 



  onColorChange(newColor: string) {
    this.parentBackgroundColor = newColor; // Change la couleur de fond lorsque l'événement est reçu
  }

}
