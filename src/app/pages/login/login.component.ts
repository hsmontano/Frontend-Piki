import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public authForm: FormGroup; 
  public Submitted = false;
  public token: any;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router, 
    private formBuilder: FormBuilder, 
    private authService: AuthService,
  ) { 
    this.authForm = this.formBuilder.group({
      login:  ['', [Validators.required]],
      password:  ['', Validators.required]
    }); 
  }



  ngOnInit(): void {
  }

  get af() {
    return this.authForm.controls;
  }

  login(){
    this.authService.login(this.authForm.value)
    .subscribe(
      (res:any) => {
        this.token = res;
        localStorage.setItem('user', JSON.stringify(res.user));
        localStorage.setItem('token', this.token.token);
        this.router.navigate(['/dashboard']);
        Swal.fire({
          icon: 'success',
          title: 'Inicio de sesion exitoso',
          showConfirmButton: false,
          timer: 1500
        })
      }, 
      err => {
        console.log(err);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Acceso denegado!',
        })
    }) 
  }

}
