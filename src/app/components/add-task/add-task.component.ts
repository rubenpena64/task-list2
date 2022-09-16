import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TaskInterface } from 'src/iTask';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<TaskInterface> = new EventEmitter();

  text: string = "";
  day: string = "";
  reminder: boolean = false;
  showAddTask: boolean = false;
  //subcription?: Subscription;
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() {
    if (!this.text) {
      alert("Debe ingresar un texto")
      return
    }
    const { text, day, reminder } = this
    const newTask = {  text, day, reminder }
    this.onAddTask.emit(newTask);
}
}