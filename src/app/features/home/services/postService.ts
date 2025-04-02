import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { post } from '../model/post';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class postService {
  private readonly baseUrl = environment['apiBaseUrl'];
  private readonly baseToken = environment['apiTokenUrl'];
  tokenUser: any;
  constructor(public http: HttpClient) {}

  CreateToken() {
    var url = this.baseToken;
    var user = {
      Email: 'juliarita1901@gmail.com',
      Password: 'fatec#Baitz123',
    };

    return (this.tokenUser = this.http.post<string>(url, user, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Acess-Control-Allow-Origin': '*',
        'Acess-Control-Allow-Methods': 'GET, POST, OPTIONS,PUT,PATCH, DELETE',
        'Acess-Control-Allow-Headers':
          'Acess-Control-Allow-Headers, Origin, Accept, X-Requested-With,Content-Type,Access-Control-Request',
      }),
    }));
  }

  /*ListPost(tokenUser: any) {
    var url = this.baseUrl + 'post';
    return;
    this.http.get<Object>(url, {
      headers: new HttpHeaders({
        'Content -Type': 'application/json',
        Authorization: `Bearer ${tokenUser}`,
      }),
    });
  }*/

  
}
