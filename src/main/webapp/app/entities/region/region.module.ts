import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Jhipster02SharedModule } from 'app/shared/shared.module';
import { RegionComponent } from './region.component';
import { RegionDetailComponent } from './region-detail.component';
import { RegionUpdateComponent } from './region-update.component';
import { RegionDeleteDialogComponent } from './region-delete-dialog.component';
import { regionRoute } from './region.route';

@NgModule({
  imports: [Jhipster02SharedModule, RouterModule.forChild(regionRoute)],
  declarations: [RegionComponent, RegionDetailComponent, RegionUpdateComponent, RegionDeleteDialogComponent],
  entryComponents: [RegionDeleteDialogComponent]
})
export class Jhipster02RegionModule {}