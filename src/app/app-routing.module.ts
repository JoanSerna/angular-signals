import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FactoringComponent } from './factoring/factoring.component';

const routes: Routes = [{ path: '', component: FactoringComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
