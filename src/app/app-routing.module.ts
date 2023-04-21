import { FormComponent } from './components/form/form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SummaryComponent } from './components/summary/summary.component';

const routes: Routes = [
    {
    path: '',
    redirectTo: 'form',
    pathMatch: 'full',
  },
  {
    path: 'form',
    component: FormComponent,
  },
  {
    path: 'submit',
    component: SummaryComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
