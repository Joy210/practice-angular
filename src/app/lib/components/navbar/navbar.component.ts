import { Component } from '@angular/core';
import { getWindow } from 'ssr-window';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  ngOnInit(): void {
    getWindow().addEventListener('scroll', this.scroll, true);
  }

  scroll = (): void => {
    let scrollHeigth;

    if (getWindow().innerWidth < 350) {
      //   scrollHeigth = 100;
      // } else if (window.innerWidth < 500 && window.innerWidth > 350) {
      //   scrollHeigth = 200;
      // } else if (window.innerWidth < 700 && window.innerWidth > 500) {
      //   scrollHeigth = 300;
      // } else if (window.innerWidth < 1000 && window.innerWidth > 700) {
      scrollHeigth = 200;
    } else {
      scrollHeigth = 200;
    }

    if (getWindow().scrollY >= scrollHeigth) {
      document.body.style.setProperty('--navbar-scroll', '#0f172a');
      document.body.style.setProperty('--navbar-scroll-text', 'white');
      document.body.style.setProperty(
        '--navbar-scroll-shadow',
        '0px 6px 12px -5px #000000'
      );
    } else if (window.scrollY < scrollHeigth) {
      document.body.style.setProperty('--navbar-scroll', 'transparent');
      document.body.style.setProperty('--navbar-scroll-text', 'white');
      document.body.style.setProperty('--navbar-scroll-shadow', 'none');
    }
  };
}
