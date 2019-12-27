import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Jhipster02SharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [Jhipster02SharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent]
})
export class Jhipster02HomeModule {}
