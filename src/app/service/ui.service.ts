import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private mostrarFormuAdd: boolean = false;
  private subjet = new Subject<any>();


  constructor() { }

  toggleAddTask(): void {
    this.mostrarFormuAdd = !this.mostrarFormuAdd;
    this.subjet.next(this.mostrarFormuAdd);
  }
  onToggle(): Observable<any> {
    return this.subjet.asObservable();
  }


}