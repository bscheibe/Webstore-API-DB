import { ClothesComponent } from './views/clothes/clothes.component';
import { AccessoriesComponent } from './views/accessories/accessories.component';
import { SuppliesComponent } from './views/supplies/supplies.component';
import { HomeComponent } from './views/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'accessories', component: AccessoriesComponent},
  {path: 'supplies', component: SuppliesComponent},
  {path: 'clothes', component: ClothesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
