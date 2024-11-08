import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, Inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit{
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const hamburgerMenu = document.querySelector(".hamburger-menu") as HTMLElement | null;
      const container = document.querySelector(".container") as HTMLElement | null;

      hamburgerMenu?.addEventListener("click", () => {
        container?.classList.toggle("active");
      });
    }
  }

}
