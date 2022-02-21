import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  promotion = [
    {
      title : "TESA CAFE",
      subtitle: "",
      image:"https://cdn.discordapp.com/attachments/846741347452321824/943502561766420510/272533715_645842409987745_7244657876949266925_n.jpg",
      detail:""
    },
    {
      title : "Rainbow Soda",
      subtitle: "",
      image:"https://cdn.discordapp.com/attachments/943502956479795270/943503037102698507/258747726_308924914600180_8135127723598346796_n.jpg",
      detail:""
    },
    {
      title : "โอริโอ้นมสด",
      subtitle: "",
      image:"https://cdn.discordapp.com/attachments/943502956479795270/943503425138753577/258850160_981906996082651_468751743072408282_n.jpg",
      detail:""
    },
    {
      title : "อเมริกาโน่",
      subtitle: "",
      image:"https://cdn.discordapp.com/attachments/943502956479795270/943504838933774346/272749158_470125527905341_7044085848769202614_n.jpg",
      detail:""
    },
    {
      title : "ชากุหลาบ",
      subtitle: "",
      image:"https://cdn.discordapp.com/attachments/943502956479795270/943504839839711332/258884125_457938169328668_4973360244614135786_n.jpg",
      detail:""
    },
  ];

  constructor() {}


}
