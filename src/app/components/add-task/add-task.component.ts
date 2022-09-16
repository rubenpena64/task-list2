import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TaskInterface } from 'src/iTask';
import { UiService } from 'src/app/service/ui.service';
import { Subscription } from 'rxjs';

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
  showFormu: boolean = false;
  subcript: Subscription;

  constructor(
    private uiService: UiService
  ) {    this.subcript = this.uiService.onToggle().subscribe(value => this.showFormu = value);}

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