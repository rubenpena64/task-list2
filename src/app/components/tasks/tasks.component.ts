import { Component, OnInit } from '@angular/core';
import { TaskInterface } from 'src/iTask';
import { tareasLista } from 'src/simuTask';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
 tareasArray: TaskInterface[] = tareasLista;
  constructor() { }

  ngOnInit(): void {
  }

}
