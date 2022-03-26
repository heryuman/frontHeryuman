import { Component, OnInit } from '@angular/core';

import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginI } from 'src/app/models/login.interface';
import { ApiService } from 'src/app/servicios/api/api.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm= new FormGroup({
    user: new FormControl('',Validators.required),
    psw: new FormControl('',Validators.required)
  })
  constructor(private api:ApiService, private router:Router) { }

  ngOnInit(): void {
  }

  onLogin(form:LoginI){

     this.api.loginUser(form).subscribe(data=>{

      console.log(data.obj)
      if(data.status){

        console.log("se encontro el usuarios")
        localStorage.setItem('token_user',JSON.stringify(data.obj))
        this.router.navigate(['user'])

      }else{
        alert("No se ha encontrado el usuario")
      }
     })
  }

}
