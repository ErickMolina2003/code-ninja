import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-carpetas',
  templateUrl: './carpetas.component.html',
  styleUrls: ['./carpetas.component.scss']
})
export class CarpetasComponent implements OnInit {
carpetasData: any = {}
userId!: string;

formularioRegistro = new FormGroup({
  nombre: new FormControl('', [Validators.required]),
  descripcion: new FormControl('',[Validators.required]),
})

constructor(private httpClient: HttpClient, private route: ActivatedRoute,private router: Router) {}



ngOnInit(): void {
      this.route.params.subscribe(params => {
      this.userId = params['userId'];
      this.fetchUserFolders(this.userId);
      });
    }

    fetchUserFolders(userId: string): void {
      this.httpClient.get('http://localhost:8888/carpetas')
        .subscribe(
          (foldersData: any) => { // Use 'any' type here
            if (Array.isArray(foldersData)) {
              this.carpetasData = foldersData.filter(folder => folder.usuarioid === userId);
              console.log(this.carpetasData);
            } else {
              console.error('Expected an array of folders, but received:', foldersData);
            }
          },
          error => {
            console.error(error);
          }
        );
    }
    



    CrearCarpetas() {
      if (this.formularioRegistro.valid) {
        const formData = {
          nombre: this.formularioRegistro.get('nombre')?.value,
          descripcion: this.formularioRegistro.get('descripcion')?.value,
          usuarioid: this.userId
        };
  
        console.log(formData);
  
        this.httpClient.post('http://localhost:8888/carpetas', formData)
          .subscribe((res: any) => { // Use type assertion (': any')
            console.log(res);
  
            if (res) {
              this.router.navigate(['/folders', this.userId]); 
            } else {
              console.log("Carpeta no creada");
            }
          });
      } else {
        console.log('Formulario inválido');
      }
    }

    eliminarCarpeta(carpetaId: string): void {
      this.httpClient.delete('http://localhost:8888/usuarios/' + carpetaId)
        .subscribe(
          response => {
            console.log('Usuario eliminado', response);
            this.router.navigate(['/']); // Redirect to a different route after deletion
          },
          error => {
            console.error('Error al eliminar el usuario', error);
          }
        );
    }















}
