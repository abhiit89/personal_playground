import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HighlightPipe} from "./highlight.pipe";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'highLigtTextInAgGrid';
  sampleData: any = {
    "messageDetails": {
      "Key1": {
        "value": "13232435678",
        "type": "{c}"
      },
      "Key2": {
        "value": "KEY34 00:14:10:546",
        "type": "{d}"
      },
      "Key3": "temp34",
      "Amount": "1276853",
      "Received On": "21/01/2019"
    }
  };
  columnDefs = [
    {headerName: 'Make', field: 'make' },
    {headerName: 'Model', field: 'model' },
    {headerName: 'Price', field: 'price'}
  ];
  rowData: any;
  constructor(private http: HttpClient){}

  ngOnInit() {
    this.rowData = this.http.get('https://api.myjson.com/bins/15psn9');
  }
}
