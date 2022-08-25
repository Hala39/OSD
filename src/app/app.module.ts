import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './sections/header/header.component';
import { ServicesComponent } from './sections/services/services.component';
import { TechnologiesComponent } from './sections/technologies/technologies.component';
import { PioneersComponent } from './sections/pioneers/pioneers.component';
import { ProcessComponent } from './sections/process/process.component';
import { AboutComponent } from './sections/about/about.component';
import { ContactComponent } from './sections/contact/contact.component';
import { FooterComponent } from './sections/footer/footer.component';
import { SectionTitleComponent } from './components/section-title/section-title.component';
import { ServiceCardComponent } from './components/service-card/service-card.component';
import { TrustComponent } from './sections/trust/trust.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ServicesComponent,
    TrustComponent,
    TechnologiesComponent,
    PioneersComponent,
    ProcessComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    SectionTitleComponent,
    ServiceCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
