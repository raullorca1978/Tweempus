import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { RouterModule } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';




@NgModule({
  declarations: [
    HeaderComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    HeaderComponent,
    NavComponent
  ], 
  providers:[AuthenticationService]
})
export class CoreModule { }
providers:[
  provideHttpClient()
]

