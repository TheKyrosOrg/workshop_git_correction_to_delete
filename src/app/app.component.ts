import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'my-app';
  thisIsMyString = 'une chaine de caractere';
  myProperty = 'ceci est ma propriété';

  ngOnInit(): void {
    console.log(this.thisIsMyString);
  }

  private logMyProperty() {
    console.log(this.myProperty);
  }
}
