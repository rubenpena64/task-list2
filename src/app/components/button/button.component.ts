import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
 @Input() textoBoton: string="";
 @Input() colorBoton: string="";
 @Output() clickBtAdd = new EventEmitter()
  constructor() { }

  ngOnInit(): void {   
  }

  hizoClick(){
    this.clickBtAdd.emit();
  }

}
