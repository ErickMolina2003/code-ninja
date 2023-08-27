import { Component, Output, EventEmitter,OnInit } from '@angular/core';
import { CommunicationService } from 'src/app/store';
import { Router, NavigationEnd,ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs';

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


  constructor(private route: Router, private watchRoute: ActivatedRoute, private communicationService: CommunicationService ) {

    this.route.events.subscribe( event => {
    
    if(event instanceof NavigationEnd){
      console.log(event.url)
      this.validateRoute( event.url)
      
      } 
    }
       
      );
  } 

  ngOnInit() {
  
  }

  validateRoute (currentPath : string){
    this.loginOptions=false;
    this.codeOptions=false;
    this.profileOptions = false;

    if (
      currentPath === '/' ||
      currentPath ==='/login' ||
      currentPath ==='/signup'
    ) {
      this.loginOptions = true;
    }

    if (currentPath.includes('code') ) {
      this.codeOptions = true;
    }

    if (
      currentPath.includes('profile') ||
      currentPath.includes('folders') ||
      currentPath.includes('color')  ||
      currentPath.includes('plans')  ||
      currentPath.includes('files') 
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
