import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bestcomp2',
  templateUrl: './bestcomp2.component.html',
  styleUrls: ['./bestcomp2.component.css']
})
export class Bestcomp2Component implements OnInit {
  allowNewServer = false;
  servercreationstatus = 'Sever was created!';
  Noname = " ";
  MyPass = " ";
  serverCreated = false;
  serverstats = 'Hey';


  constructor() {

    this.serverstats = Math.random() > 0.5 ? 'online' : 'No';

    setTimeout(() => {
      this.allowNewServer = true;


    },2000);
  }

  ngOnInit(): void {
    this.Noname = (<HTMLInputElement>event.target).value;
    this.MyPass = (<HTMLInputElement>event.target).value;
  }

  getColor(){

 return this.serverstats === 'online' ? 'green' : 'red';

  }

  MyFunc () {

   this.Noname = '';
   this.MyPass = '';
   this.serverCreated = true;


  }





}
