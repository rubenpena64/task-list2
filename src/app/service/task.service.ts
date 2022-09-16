import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { TaskInterface } from 'src/iTask';
import { tareasLista } from 'src/simuTask';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

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

  deleteTask(estaTarea: TaskInterface): Observable<TaskInterface> {
    const url = `${this.apiUrl}/${estaTarea.id}`
    return this.http.delete<TaskInterface>(url)
  }

  updateTaskReminder(OtraTarea: TaskInterface): Observable<TaskInterface> {
    const url = `${this.apiUrl}/${OtraTarea.id}`
   return this.http.put<TaskInterface>(url, OtraTarea,httpOptions)
  }
  addTask(otraDistinta: TaskInterface): Observable<TaskInterface> {
    return this.http.post<TaskInterface>(this.apiUrl, otraDistinta, httpOptions)
  }
}
