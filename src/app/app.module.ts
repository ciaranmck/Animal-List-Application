import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// imports
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';

// app components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiService } from './api.service';
import { CardListComponent } from './card-list/card-list.component';
import { AddFormComponent } from './add-form/add-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AnimalInfoComponent } from './animal-info/animal-info.component';

@NgModule({
  declarations: [
    AppComponent,
    CardListComponent,
    AddFormComponent,
    NavbarComponent,
    AnimalInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    HttpClientModule,
    MatCardModule,
    FormsModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
})
export class AppModule { }
