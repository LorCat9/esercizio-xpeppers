import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ReceiptComponent } from './receipt/receipt.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {SidebarModule} from './sidebar/sidebar.module';
import {FooterModule} from './sharedComponents/footer/footer.module';
import {FormsModule} from '@angular/forms';
import {NavbarModule} from './sharedComponents/navbar/navbar.module';
import {RepositoryService} from './services/repository-service/repository.service';
import {XpService} from './services/XpService/xp.service';
import {ReceiptAuthGuardService} from './services/receipt-auth-guard/receipt-auth-guard.service';
import {AppRoutes} from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReceiptComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(AppRoutes),
    SidebarModule,
    FooterModule,
    FormsModule,
    NavbarModule
  ],
  providers: [
    RepositoryService,
    XpService,
    ReceiptAuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
