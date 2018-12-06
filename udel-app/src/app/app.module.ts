import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SecurityModule } from './security/security.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { ClothesComponent } from './views/clothes/clothes.component';
import { AccessoriesComponent } from './views/accessories/accessories.component';
import { SuppliesComponent } from './views/supplies/supplies.component';
import { TestComponent } from './views/test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClothesComponent,
    AccessoriesComponent,
    SuppliesComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    SecurityModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
