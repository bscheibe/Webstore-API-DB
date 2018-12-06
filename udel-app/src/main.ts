import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

var cartitems = [];

function addToCart(arr, productName, cost){
  cartitems.push({productName, cost});
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
