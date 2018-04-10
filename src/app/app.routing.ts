/**
 * Created by lorenzo on 10/04/18.
 */
import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ReceiptComponent} from './receipt/receipt.component';
import {ReceiptAuthGuardService} from './services/receipt-auth-guard/receipt-auth-guard.service';

export const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'receipt',
    component: ReceiptComponent,
    canActivate: [ReceiptAuthGuardService]
  }
];
