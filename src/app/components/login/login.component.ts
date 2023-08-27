import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  formularioRegistro = new FormGroup({
    nombreUsuario: new FormControl('', [Validators.required]),
    contraseña: new FormControl('', [Validators.required])
  })
  user: Array<any> = []
  constructor(private httpClient: HttpClient, private router: Router) {}

  ngOnInit(): void {}

  logIn() {
    if (this.formularioRegistro.valid) {
      const formData = {
        nombreUsuario: this.formularioRegistro.get('nombreUsuario')?.value,
        contraseña: this.formularioRegistro.get('contraseña')?.value
      };

      console.log(formData);

      this.httpClient.post('http://localhost:8888/login', formData)
        .subscribe((res: any) => {
          console.log(res);

          if (res.mensaje === 'Inicio de sesión exitoso') {
            const userId = res.userData.userId;
            console.log(userId)
            this.router.navigate(['/profile',userId]);
          } else {
            console.log('Credenciales inválidas');
          }
        });
    } else {
      console.log('Formulario inválido');
    }
  }
}
