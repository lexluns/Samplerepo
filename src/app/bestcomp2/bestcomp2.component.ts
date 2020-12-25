import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bestcomp2',
  templateUrl: './bestcomp2.component.html',
  styleUrls: ['./bestcomp2.component.css']
})
export class Bestcomp2Component implements OnInit {
  allowNewServer = false;
  servercreationstatus = 'No Sever was created';
  Noname = "";

  constructor() {

  }

  ngOnInit(): void {
  }

  Funcservercreate () {

   this.Noname = '';

  }

  Inputfunc(event: Event){

 this.Noname = (<HTMLInputElement>event.target).value;

  }

}
