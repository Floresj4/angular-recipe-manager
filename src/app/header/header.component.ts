import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  displayContent:string;
  
  @Output() navigationEvent = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit() {
  }

  onNavigationClick(event) {
    this.displayContent = event.srcElement.textContent;
	this.navigationEvent.emit(this.displayContent);
  }
}
