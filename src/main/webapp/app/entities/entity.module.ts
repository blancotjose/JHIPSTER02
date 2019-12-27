import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'region',
        loadChildren: () => import('./region/region.module').then(m => m.Jhipster02RegionModule)
      },
      {
        path: 'country',
        loadChildren: () => import('./country/country.module').then(m => m.Jhipster02CountryModule)
      },
      {
        path: 'location',
        loadChildren: () => import('./location/location.module').then(m => m.Jhipster02LocationModule)
      },
      {
        path: 'department',
        loadChildren: () => import('./department/department.module').then(m => m.Jhipster02DepartmentModule)
      },
      {
        path: 'task',
        loadChildren: () => import('./task/task.module').then(m => m.Jhipster02TaskModule)
      },
      {
        path: 'employee',
        loadChildren: () => import('./employee/employee.module').then(m => m.Jhipster02EmployeeModule)
      },
      {
        path: 'job',
        loadChildren: () => import('./job/job.module').then(m => m.Jhipster02JobModule)
      },
      {
        path: 'job-history',
        loadChildren: () => import('./job-history/job-history.module').then(m => m.Jhipster02JobHistoryModule)
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ]
})
export class Jhipster02EntityModule {}
