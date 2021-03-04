import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatSidenavModule,
  MatTabsModule
} from '@angular/material';
import { HeropostComponent } from './heropost/heropost.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ProductsComponent } from './products/products.component';
import { ProductitemComponent } from './products/productitem/productitem.component';
import {HttpClientModule} from '@angular/common/http';
import { FreeApiService } from './products/free-api.service';
import { ModalComponent } from './products/modal/modal.component';
import { ReviewComponent } from './review/review.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    HeropostComponent,
    ProductsComponent,
    ProductitemComponent,
    ModalComponent,
    ReviewComponent,
    FooterComponent,
  ],
  entryComponents: [ModalComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule,
    MatTabsModule,
    MatSidenavModule,
    MatSelectModule
  ],
  providers: [FreeApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
