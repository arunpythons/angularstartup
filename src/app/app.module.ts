import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidePanelComponent } from './side-panel/side-panel.component';
import { TopPanelComponent } from './top-panel/top-panel.component';
import { BodyPanelComponent } from './body-panel/body-panel.component';
import { BodyInboxPanelComponent } from './body-inbox-panel/body-inbox-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    SidePanelComponent,
    TopPanelComponent,
    BodyPanelComponent,
    BodyInboxPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
