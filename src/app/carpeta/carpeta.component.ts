import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-carpeta',
  templateUrl: './carpeta.component.html',
  styleUrls: ['./carpeta.component.scss']
})
export class CarpetaComponent {
  @Input() eliminarCarpeta!: () => void;
  
}
