import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountComponent } from './account.component';
import { CardDetailsComponent } from './card-details/card-details.component';
import { ServicesComponent } from './services/services.component';
import { TransactionsComponent } from './transactions/transactions.component';

const routes: Routes = [
    
        {path:'' , component:AccountComponent,
          children:[
             {path:'cardDetails',component: CardDetailsComponent},
             { path: 'services', component: ServicesComponent },
             { path: 'transactions', component: TransactionsComponent },
             
   ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
