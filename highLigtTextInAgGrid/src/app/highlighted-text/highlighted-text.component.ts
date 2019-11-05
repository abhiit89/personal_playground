import {Component, Input, OnInit} from '@angular/core';
import {HighlightPipe} from "../highlight.pipe";

@Component({
  selector: 'app-highlighted-text',
  templateUrl: './highlighted-text.component.html',
  styleUrls: ['./highlighted-text.component.css']
})
export class HighlightedTextComponent implements OnInit {
  @Input('messageDetail') messageDetail: any;
  @Input('args') key:any;
  messageDetailsKeys: string[];
  matchingSearchObject: any;

  constructor(private highLight:HighlightPipe) {
  }

  getSampleData():any{
    return this.highLight.transform(this.messageDetail,this.key);
  }

  getMarkedValue(key):string{
    const re = new RegExp(this.key, 'gi');
    let value:string = this.matchingSearchObject[key];
    if(value.match(re)){
      let matchedText = value.substr(0,this.key.length);
      let unmatchedText = value.substring(this.key.length,value.length);
      return `<mark>${matchedText}</mark>${unmatchedText}`;
    } else {
      return value;
    }
  }

  ngOnInit() {
    this.matchingSearchObject = this.getSampleData();
    this.messageDetailsKeys = Object.keys(this.matchingSearchObject);
  }

}
