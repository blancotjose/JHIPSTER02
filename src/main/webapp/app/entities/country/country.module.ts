import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Jhipster02SharedModule } from 'app/shared/shared.module';
import { CountryComponent } from './country.component';
import { CountryDetailComponent } from './country-detail.component';
import { CountryUpdateComponent } from './country-update.component';
import { CountryDeleteDialogComponent } from './country-delete-dialog.component';
import { countryRoute } from './country.route';

@NgModule({
  imports: [Jhipster02SharedModule, RouterModule.forChild(countryRoute)],
  declarations: [CountryComponent, CountryDetailComponent, CountryUpdateComponent, CountryDeleteDialogComponent],
  entryComponents: [CountryDeleteDialogComponent]
})
export class Jhipster02CountryModule {}
