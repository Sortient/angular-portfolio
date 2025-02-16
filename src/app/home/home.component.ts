import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  fullText: string = "Hi, I'm Owen.";
  displayText: string = '';
  index: number = 0;
  typingSpeed: number = 150;

  ngOnInit(): void {
    const intervalId = setInterval(() => {
      if (this.index < this.fullText.length) {
        this.displayText += this.fullText.charAt(this.index);
        this.index++;
      } else {
        clearInterval(intervalId);
      }
    }, this.typingSpeed);
  }
}
