import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  @ViewChild('hamburgerMenu', { static: true }) hamburgerMenu!: ElementRef;
  @ViewChild('container', { static: true }) container!: ElementRef;

  ngOnInit() {
    this.hamburgerMenu.nativeElement.addEventListener('click', () => this.toggleMenu());
  }

  toggleMenu() {
    this.container.nativeElement.classList.toggle('active');
  }
}
