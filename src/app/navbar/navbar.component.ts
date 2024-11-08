import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit{
  ngOnInit() {
    const hamburgerMenu = document.querySelector(".hamburger-menu") as HTMLElement | null;
    const container = document.querySelector(".container") as HTMLElement | null;

    hamburgerMenu?.addEventListener("click", () => {
      container?.classList.toggle("active");
    });
  }

}
