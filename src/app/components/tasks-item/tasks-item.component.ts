import { Component, Input, OnInit } from '@angular/core';
import { TaskInterface } from 'src/iTask';
import { tareasLista } from 'src/simuTask';

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css']
})
export class TasksItemComponent implements OnInit {
  @Input() tareaEnItem: TaskInterface = tareasLista[0];
  constructor() { }

  ngOnInit(): void {
  }

}
