import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {
  fullText: string = "Hi, I'm Owen.";
  displayText: string = '';
  index: number = 0;
  typingSpeed: number = 150;
  typingInterval: any;

  ngOnInit(): void {
    this.startTypingAnimation();
  }

  ngOnDestroy(): void {
    if (this.typingInterval) {
      clearInterval(this.typingInterval);
    }
  }

  startTypingAnimation(): void {
    this.typingInterval = setInterval(() => {
      if (this.index < this.fullText.length) {
        this.displayText += this.fullText.charAt(this.index);
        this.index++;
      } else {
        clearInterval(this.typingInterval);
        
        // Add glitch class to text after typing is complete
        setTimeout(() => {
          const glitchElement = document.querySelector('.glitch-text');
          if (glitchElement) {
            glitchElement.setAttribute('data-text', this.fullText);
          }
        }, 200);
      }
    }, this.typingSpeed);
  }

  scrollToContact(): void {
    const contactSection = document.querySelector('.contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}