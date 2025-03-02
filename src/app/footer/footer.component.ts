import { Component } from '@angular/core';
import { version } from '../../../package.json';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  
  githubUrl: string = 'https://www.github.com/Sortient';
  linkedinUrl: string = 'https://www.linkedin.com/in/owen-sortwell-2b4332169/';
  initialYear: string = '2025';
  currentYear!: string;
  copyrightYears!: string;
  appVersion: string = version;

  ngOnInit(): void {
    this.currentYear = new Date().getFullYear().toString();
    this.copyrightYears = this.currentYear;
    
    if (this.currentYear !== this.initialYear) {
      this.copyrightYears = `${this.initialYear} - ${this.currentYear}`;
    }
  }
}
