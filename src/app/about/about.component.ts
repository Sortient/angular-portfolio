import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule,
    MatExpansionModule
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  currentAge: number = 25;
}