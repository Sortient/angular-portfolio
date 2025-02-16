import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { RouterLinkActive, RouterOutlet, RouterLink } from '@angular/router';
declare var bootstrap: any; 

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    RouterLink, 
    RouterLinkActive
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements AfterViewInit {
  @ViewChild('navbarNav') navbarNav!: ElementRef;
  private bsCollapse: any;

  ngAfterViewInit() {
    this.bsCollapse = new bootstrap.Collapse(this.navbarNav.nativeElement, { toggle: false });
  }

  collapseNav() {
    if (this.bsCollapse && this.navbarNav.nativeElement.classList.contains('show')) {
      this.bsCollapse.hide();
    }
  }
}