import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  loginOptions = false;
  codeOptions = false;
  profileOptions = false;

  constructor(private route: Router) {}

  ngOnInit() {
    // Obtén el path actual
    const currentPath = this.route.url.slice(1);
    console.log(currentPath);
    if (
      currentPath === '' ||
      currentPath === 'login' ||
      currentPath === 'signup'
    ) {
      this.loginOptions = true;
    }

    if (currentPath === 'code') {
      this.codeOptions = true;
    }

    if (
      currentPath === 'profile' ||
      currentPath === 'folders' ||
      currentPath === 'color' ||
      currentPath === 'plans' ||
      currentPath === 'files'
    ) {
      this.profileOptions = true;
    }
  }

  navegarLandingpage() {
      this.route.navigate(['/']);
    }

}
