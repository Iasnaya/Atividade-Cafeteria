import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CardapioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cardapio',
  templateUrl: 'cardapio.html',
})
export class CardapioPage {
  cardapio: { 'produto': string; 'preco': string; 'foto': string; }[];
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.cardapio = [
      {'produto': 'Capuccino', 'preco': '10.00', 'foto': 'assets/imgs/cappuccino-tradicional.png'},
      {'produto': 'Expresso Doce de Leite', 'preco': '12.00', 'foto': 'assets/imgs/expresso-docedeleite.png'},
      {'produto': 'Expresso Doce de Leite', 'preco': '12.00', 'foto': 'assets/imgs/expresso-docedeleite.png'},
      {'produto': 'Mocha', 'preco': '11.00', 'foto': 'assets/imgs/expresso-mocha.png'},
      {'produto': 'Tradicional', 'preco': '8.00', 'foto': 'assets/imgs/expresso-tradicional.png'},
      {'produto': 'Capuccino c/ Canela', 'preco': '10.50', 'foto': 'assets/imgs/cappuccino-canela.png'},
      ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CardapioPage');
  }

}
