import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-horario',
  templateUrl: 'horario.html',
})
export class HorarioPage {
     
  horarios: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.horarios = [
      'SEG 10h - 22h',
      'TER 10h - 22h',
      'QUA 10h - 22h',
      'QUI 10h - 22h',
      'SEX 09h - 00h',
      'SAB 09h - 00h',
      'DOM 15h - 21h',
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HorarioPage');
  }

}
