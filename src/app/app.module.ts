import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartUpFormComponentComponent } from './start-up-form-component/start-up-form-component.component';
import { VideoComponentComponent } from './video-component/video-component.component';

@NgModule({
  declarations: [
    AppComponent,
    StartUpFormComponentComponent,
    VideoComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
