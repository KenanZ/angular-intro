import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  title:string = '';
  tasks: Task[] = [
    {title:'Prvi naslov',completed: false},
    {title:'Drugi naslov',completed: false},
    {title:'Treci naslov',completed: true}
  ];

ngOnInit(): void{
  // alert('aaa');
  console.table(this.tasks);
}

add() {
  this.tasks.push({title:this.title, completed:false})
  this.title='';
}

}

interface Task{
  title: string;
  completed: boolean;
}
