import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bestcomp2',
  templateUrl: './bestcomp2.component.html',
  styleUrls: ['./bestcomp2.component.css']
})
export class Bestcomp2Component implements OnInit {
  allowNewServer = false;
  servercreationstatus = 'No Sever was created';
  Noname = " ";
  MyPass = " ";

  constructor() {



    setTimeout(() => {
      this.allowNewServer = true;


    },2000);
  }

  ngOnInit(): void {
    this.Noname = (<HTMLInputElement>event.target).value;
    this.MyPass = (<HTMLInputElement>event.target).value;
  }

  MyFunc () {

   this.Noname = '';

  }





}
