import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './core/interceptor/token.interceptor';
import { HttpErrorInterceptor } from './core/interceptor/http-error-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [  { provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  },

{
  provide : HTTP_INTERCEPTORS,
  useClass : HttpErrorInterceptor,
  multi: true
}

],
  bootstrap: [AppComponent]
})
export class AppModule { }
