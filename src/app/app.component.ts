import { Component } from '@angular/core';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  // title = 'Calculator';
  // count = 1;

  // // Inputs for calculator
  // num1=0;
  // num2=0;
  // value=0;
  // sym="+";
  // cnt=0;

  // calc=() => {
  //   this.cnt++;
  //   if(this.sym=="+"){
  //     this.value=this.num1+this.num2
  //   }
  //   if(this.sym=="-"){
  //     this.value=this.num1-this.num2
  //   }
  //   if(this.sym=="*"){
  //     this.value=this.num1*this.num2
  //   }
  //   if(this.sym=="/"){
  //     this.value=this.num1/this.num2
  //   }
  // }

  // listOfNumbers = [1, 32, 32, 55];
  // listOfNames = ["Ronnie", "Jack", "Wilbur"];

  // decreaseCount=() => {
  //   console.log("Button Clicked")
  //   this.count--;
  // }
  // increaseCount=() => {
  //   console.log("Button Clicked")
  //   this.count++;
  // }
  todoItem:string="";
  todoList:string[]=[];
  addToDoList=()=>{
    this.todoList.push(this.todoItem)
    this.todoItem='';
  }
}
