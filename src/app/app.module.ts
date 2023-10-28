import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './components/layout/layout.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from './components/shared/shared.module';
import { RoutesModule } from './components/routes/routes.module';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { AuthModule } from './components/auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    RouterModule,
    SharedModule,
    RoutesModule,
    HttpClientModule,
    AuthModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
