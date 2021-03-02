import { Component, Inject, OnInit, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'back-to-top-button',
  templateUrl: './back-to-top.component.html',
  styleUrls: ['./back-to-top.component.scss']
})
export class BackToTopComponent implements OnInit {

  windowScrolled: boolean;

  constructor(@Inject(DOCUMENT) private document: Document) { }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    if (window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop > 100) {
      this.windowScrolled = true;
    } else if (this.windowScrolled && window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop < 10) {
      this.windowScrolled = false;
    }
  }

  scrollToTop() {
    var currentScroll = this.document.documentElement.scrollTop || this.document.body.scrollTop;
    if (currentScroll > 0) {
      this.document.body.scrollTop = 0; // For Safari
      this.document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
  }

  ngOnInit(): void {
  }

}
