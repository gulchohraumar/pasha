import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(  private http: HttpClient,  ) { }
  api = 'our-api-link';

  saveAppeal(data: any, file: any) {
    const formData = new FormData();

    formData.append('appealData', file);
    formData.append('cvFile', file);
    formData.append('cvFile', file);
    return this.http.post<any>(this.api, data);
  }
}
