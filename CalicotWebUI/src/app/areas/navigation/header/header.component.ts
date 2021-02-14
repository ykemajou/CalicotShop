import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();
  
  title = 'CALICOT SHOP';
  constructor() { }

  ngOnInit(): void {
  }
  
  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }
}