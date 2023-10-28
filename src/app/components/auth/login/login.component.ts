import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private formBuilder: FormBuilder, private router:Router){

  }

  
  loginFormGroup: FormGroup = this.formBuilder.group({
    email:['', [Validators.email, Validators.required]],
    password: ['',[Validators.required, Validators.minLength(3)]]
  })

  leerDatos(){
    console.log(this.loginFormGroup.value);
    sessionStorage.setItem('user', JSON.stringify(this.loginFormGroup.value))
    this.router.navigate(["/home"])
  }

}
