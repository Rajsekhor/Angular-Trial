import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trial',
  templateUrl: './trial.component.html',
  styleUrls: ['./trial.component.css']
})
export class TrialComponent implements OnInit {

  joke : any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  GetaJoke=()=>{
    this.http.get("https://api.chucknorris.io/jokes/random")
    .subscribe((result: any)=>(this.joke=result.value))
  }

}
