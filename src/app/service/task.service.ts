import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { TaskInterface } from 'src/iTask';
import { tareasLista } from 'src/simuTask';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:3000/taskEnDbJason'

  constructor(
    private http: HttpClient
  ) { }

  getTask(): Observable <TaskInterface[]>{
   
   
       return this.http.get<TaskInterface[]>(this.apiUrl);
  }


 

}
