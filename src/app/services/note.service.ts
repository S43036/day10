import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private http: HttpClient) { }

//below doesn't seem to work

//  addNote(note){
//    return this.http.post(`${environment.api_url}registerForm`, note);
//  }

}
