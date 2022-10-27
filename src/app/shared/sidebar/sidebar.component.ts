import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [`
      li { cursor: pointer; }
      li.active span {
          background-color: rgba(30, 58, 138, .5);
          border-radius: 0.5rem;
          border: 1px solid rgba(59, 130, 246);
      }
  `]
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}