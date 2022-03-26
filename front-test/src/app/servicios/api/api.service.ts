import { Injectable } from '@angular/core';
import {LoginI}from '../../models/login.interface'
import {ResponseI}from '../../models/response.interface'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string='http://127.0.0.1:3000/'
  constructor(private http:HttpClient) { }

  loginUser(form:LoginI):Observable<ResponseI>{

    let dir=this.url+'login';
    console.log(form)
    return this.http.post<ResponseI>(dir,form)



  }
}
