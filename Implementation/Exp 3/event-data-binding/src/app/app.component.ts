import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  name: string = "Apex";

  imgUrl: string = "https://www.geeksforgeeks.org/wp-content/uploads/gfg_200X200-1.png";

  count: number = 0;
  onButtonClick() {
    this.count++;
    // console.log("Clicked on the button : " + this.count);
  }

  name_two:string = "";
}


