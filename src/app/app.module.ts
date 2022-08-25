import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './sections/header/header.component';
import { ServicesComponent } from './sections/services/services.component';
import { ValuesComponent } from './sections/values/values.component';
import { TechnologiesComponent } from './sections/technologies/technologies.component';
import { PioneersComponent } from './sections/pioneers/pioneers.component';
import { ProcessComponent } from './sections/process/process.component';
import { AboutComponent } from './sections/about/about.component';
import { ContactComponent } from './sections/contact/contact.component';
import { FooterComponent } from './sections/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ServicesComponent,
    ValuesComponent,
    TechnologiesComponent,
    PioneersComponent,
    ProcessComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
