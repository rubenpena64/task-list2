import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../service/task.service';
import { TaskInterface } from 'src/iTask';
//import { tareasLista } from 'src/simuTask';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tareasArray: TaskInterface[] = [];

  constructor(
    private taskService: TaskService
  ) { }

  ngOnInit(): void {
    this.taskService.getTask().subscribe((unaVarCualquiera) => {
      this.tareasArray = unaVarCualquiera;
    });
  }
  delete(tareaRecibida: TaskInterface) {
    this.taskService.deleteTask(tareaRecibida)
      .subscribe(() => {
        this.tareasArray = this.tareasArray.filter((t) => {
          return t.id !== tareaRecibida.id;
        })
      })
  }
  toggleReminder(tareaRecibida: TaskInterface) {
    tareaRecibida.reminder = !tareaRecibida.reminder

    this.taskService.updateTaskReminder(tareaRecibida).subscribe();
  }

  addTask(tareaRecibida: TaskInterface) {  
    this.taskService.addTask(tareaRecibida).subscribe((tareaRecibida) =>
      this.tareasArray.push(tareaRecibida)
    )
  }
}


