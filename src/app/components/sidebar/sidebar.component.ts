import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { CommunicationService } from 'src/app/store';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  loginOptions = false;
  codeOptions = false;
  profileOptions = false;
  @Output() downloadEvent = new EventEmitter<boolean>();

  constructor(
    private route: Router,
    private communicationService: CommunicationService
  ) {}

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

  emitDownload() {
    this.communicationService.emitDownloadEvent();
    this.downloadEvent.emit(true);
  }

  emitShare() {
    this.communicationService.emitShareEvent();
  }

  navegarLandingpage() {
    this.route.navigate(['/']);
  }
}
