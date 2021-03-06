import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { LojaPage } from '../pages/loja/loja';
import { ContactPage } from '../pages/contact/contact';
import { CardapioPage } from '../pages/cardapio/cardapio';
import { MensagemPage } from '../pages/mensagem/mensagem';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HorarioPage } from '../pages/horario/horario';

@NgModule({
  declarations: [
    MyApp,
    LojaPage,
    ContactPage,
    CardapioPage,
    MensagemPage,
    TabsPage,
    HorarioPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LojaPage,
    ContactPage,
    CardapioPage,
    MensagemPage,
    TabsPage,
    HorarioPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
