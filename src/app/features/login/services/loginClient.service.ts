import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Client,Token } from "../model/Login/loginClient";
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { environment } from "../../../../environments/environment.development";
import { Injectable } from "@angular/core";
import { Response } from "../model/Login/Response";
import { catchError, map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable({
    providedIn: 'root',
  })
  export class LoginClientService{

   /* private readonly baseUrl = environment["apiBaseUrl"];
    private userSubject = new BehaviorSubject<Client | null>(null);
    public user$: Observable<Client | null> = this.userSubject.asObservable();
    tokenUser: any;
    constructor(private http: HttpClient,
               private router: Router
    ) {
      
    }
     
    CreateToken()
    {
        var url = this.baseUrl;
        var user = {
            Email: 'juliarita1901@gmail.com',
            Password: 'fatec#Baitz123'

        }

        return this.tokenUser = this.http.post<string>(url,user,{
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Acess-Control-Allow-Origin': '*',
                'Acess-Control-Allow-Methods': 'GET, POST, OPTIONS,PUT,PATCH, DELETE',
               'Acess-Control-Allow-Headers':
        'Acess-Control-Allow-Headers, Origin, Accept, X-Requested-With,Content-Type,Access-Control-Request'
        })

    });

    }

    


    /*GetUsers() : Observable<Client[]>{
        return this.http.get<Client[]>(this.baseUrl, + '/Client');

    }*/
    
   
  }