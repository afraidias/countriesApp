import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [`
      li { cursor: pointer; }
      li.active span {
          background-color: rgb(55 66 81);
          border-radius: 0.5rem;
      }
  `]
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}