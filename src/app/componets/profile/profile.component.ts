import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  profileImageURL: string = '../assets/img/facebooklogo.png'; // Ruta de la foto de perfil actual

  // Función para manejar el cambio de la foto seleccionada
  onFileSelected(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const file = inputElement.files?.[0];

    if (file) {
      // Aquí puedes enviar el archivo al servidor si es necesario
      // y obtener la URL de la imagen almacenada para actualizar profileImageURL
      // Por ahora, simplemente mostraremos la imagen seleccionada en la vista
      const reader = new FileReader();
      reader.onload = () => {
        this.profileImageURL = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  // Función para eliminar la foto de perfil actual
  removeProfilePhoto(): void {
    this.profileImageURL = '../assets/img/facebooklogo.png'; // Reestablecer a la imagen por defecto
  }

  // Función para guardar los cambios (aquí debes implementar el envío al servidor si es necesario)
  saveChanges(): void {
    // Implementa la lógica para guardar los cambios, si es necesario.
  }








  
}
