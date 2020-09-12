import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RandomComponent } from './random/random.component';
import { GreetingComponent } from './greeting/greeting.component';
import { AboutComponent } from '../about/about.component';
import { DiscListComponent } from './disc-list/disc-list.component';
import { DiscDetailsComponent } from './disc-details/disc-details.component';
import { MultiplicationTableComponent } from './multiplication-table/multiplication-table.component';

// RouterModule.forRoot: módulo que importa os componentes como seções do site navegáveis
// Array formada por: 
// --- path: identificador (URL amigável)
// --- component: componente com o conteúdo que será associado ao path

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'greeting', component: GreetingComponent },
      { path: 'random', component: RandomComponent },
      { path: 'multiplication-table', component: MultiplicationTableComponent },
      { path: 'discs', component: DiscListComponent },
      { path: 'discs/:index', component: DiscDetailsComponent }
    ])
  ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, RandomComponent, GreetingComponent, DiscListComponent, DiscDetailsComponent, MultiplicationTableComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
