import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AccountComponent } from './account.component';
import { AccountRoutingModule } from './account-routing.module';
import { CardDetailsComponent } from './card-details/card-details.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { ServicesComponent } from './services/services.component';



@NgModule({
  declarations: [
    AccountComponent,
    CardDetailsComponent,
    TransactionsComponent,
    ServicesComponent,
],
  imports: [
   CommonModule,
   FormsModule,
   ReactiveFormsModule,
   AccountRoutingModule,
   
  ],

   exports: [
     
   ],
  providers: []
  
 
})
export class AccountModule { }
