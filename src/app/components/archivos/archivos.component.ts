import { Component } from '@angular/core';

@Component({
  selector: 'app-archivos',
  templateUrl: './archivos.component.html',
  styleUrls: ['./archivos.component.scss']
})
export class ArchivosComponent {
  showDropdown = false;
  selectedFolderContent: string = '';

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  showFolderContent(folderName: string) {
    // Aquí puedes implementar la lógica para obtener el contenido de la carpeta seleccionada
    // Por ejemplo, podrías hacer una llamada a un servicio que obtenga los datos de la carpeta
    // y asignarlos a la variable selectedFolderContent
    this.selectedFolderContent = `Contenido de ${folderName}`;
  }

  addArchivo() {
    // Aquí puedes implementar la lógica para agregar un archivo
    // Por ejemplo, puedes mostrar un formulario en un modal para agregar detalles del archivo
  }

  addNuevoProyecto() {
    // Aquí puedes implementar la lógica para agregar un nuevo proyecto
    // Por ejemplo, puedes mostrar un formulario en un modal para agregar detalles del proyecto
  }
}
