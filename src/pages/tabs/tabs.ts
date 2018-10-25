import { Component } from '@angular/core';

import { LojaPage } from '../loja/loja';
import { ContactPage } from '../contact/contact';
import { CardapioPage } from '../cardapio/cardapio';
import { HorarioPage } from '../horario/horario';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = CardapioPage;
  tab2Root = LojaPage;
  tab3Root = ContactPage;
  tab4Root = HorarioPage;
  


  constructor() {

  }
}
