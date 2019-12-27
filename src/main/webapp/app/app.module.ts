import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { Jhipster02SharedModule } from 'app/shared/shared.module';
import { Jhipster02CoreModule } from 'app/core/core.module';
import { Jhipster02AppRoutingModule } from './app-routing.module';
import { Jhipster02HomeModule } from './home/home.module';
import { Jhipster02EntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    Jhipster02SharedModule,
    Jhipster02CoreModule,
    Jhipster02HomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    Jhipster02EntityModule,
    Jhipster02AppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent]
})
export class Jhipster02AppModule {}
