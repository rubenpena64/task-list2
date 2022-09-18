import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TaskInterface } from 'src/iTask';
import { tareasLista } from 'src/simuTask';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { formatDate } from '@angular/common';


@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css']
})
export class TasksItemComponent implements OnInit {
  @Input() tareaEnItem: TaskInterface = tareasLista[0];
  @Output() onDeleteTask: EventEmitter<TaskInterface> = new EventEmitter()
  @Output() onToggleReminder: EventEmitter<TaskInterface> = new EventEmitter()
  icoCruz = faTimes;
  
  diaEnDate!:Date;
  diaEnString:string=""; 
  today: Date = new Date();
  estiloVencido: string ="";
  
  constructor() {}
  
  ngOnInit(): void { 
    this.cambiaraDate()
  }
  cambiaraDate()
  {
    this.diaEnDate = new Date(this.tareaEnItem.day);
    if(this.diaEnDate < this.today) {
      this.estiloVencido="red";
    }else{
      this.estiloVencido="green";
    }      
  }

  onDelete(tareaEnItem: TaskInterface){
    this.onDeleteTask.emit(tareaEnItem);   
  }
  
  onToggle(tareaEnItem: TaskInterface){
    this.onToggleReminder.emit(tareaEnItem);
  } 
  
}
//      

// value_expression | date [ : format [ : timezone [ : locale ] ] ] 



