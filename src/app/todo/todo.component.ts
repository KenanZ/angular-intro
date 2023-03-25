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
  const tasksAsString = localStorage.getItem("tasks");
  if (tasksAsString)
    this.tasks=JSON.parse(tasksAsString);
  console.table(this.tasks);
}

add() {
  this.tasks.push({title:this.title, completed:false})
  this.title='';
  this.save();
}

deleteTask(TaskToDelete:Task){
  this.tasks=this.tasks.filter(tt=>tt!=TaskToDelete);
  this.save();
}

save(){
  localStorage.setItem("tasks",JSON.stringify(this.tasks));
}

completed(){
  return this.tasks.filter(t=>t.completed).length;
}

}

interface Task{
  title: string;
  completed: boolean;
}
