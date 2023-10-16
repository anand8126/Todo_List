import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validator, Validators}  from '@angular/forms';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {


  todoForm!:FormGroup;
  tasks:any[]=[];
  inpregress:any[]=[];
  done:any[]=[]


  constructor(private fb:FormBuilder){}

  ngOnInit():void{
    this.todoForm=this.fb.group({
      item:['',Validators.required]
    })
  }

}
