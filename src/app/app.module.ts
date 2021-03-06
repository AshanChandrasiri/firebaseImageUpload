import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { FirebaseUploadComponent } from './firebase-upload/firebase-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    FirebaseUploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,

 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
