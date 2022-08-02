import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    public display(level: string):void{
        alert("Survey result: "+ level)
    }

  constructor() { }

  ngOnInit(): void {
  }

}
