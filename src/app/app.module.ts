import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthService } from 'src/auth.service';
import { TokenInterceptorService } from './services/token-interceptor.service'; // Importa TokenInterceptorService

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AuthService, // Proveedor para AuthService
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true }, // Interceptor TokenInterceptorService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
