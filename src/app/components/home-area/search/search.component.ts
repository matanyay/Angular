import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

    public tooltip: String = "Search Entire Website...";
    public textToSearch: String = "";

    public searchWebsite(event: Event): void{
        alert("Searching for " + this.textToSearch);
    }

  constructor() { }

  ngOnInit(): void {
  }

}
