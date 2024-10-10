import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainModule } from './main/main.module';
import { AdminModule } from './admin/admin.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import localeAz from '@angular/common/locales/az';  // Azerbaijani locale data
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeAz); 

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    MainModule,
    AdminModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule.withConfig({callSetDisabledState: 'whenDisabledForLegacyCode'}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
