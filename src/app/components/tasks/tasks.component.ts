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
    this.taskService.getTask().subscribe((unaCualquiera) => {
      this.tareasArray = unaCualquiera;
      console.log(unaCualquiera);
    });


  }


}



