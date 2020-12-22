import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bestcomp2',
  templateUrl: './bestcomp2.component.html',
  styleUrls: ['./bestcomp2.component.css']
})
export class Bestcomp2Component implements OnInit {
  allowNewServer = false;

  constructor() {

    setTimeout(() => {
      this.allowNewServer = true;


    },2000);
  }

  ngOnInit(): void {
  }

}
