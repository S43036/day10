import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RegisterComponent } from './components/register/register.component'
import { ConfirmComponent } from './components/register/confirm/confirm.component'
import { RouterModule, Routes } from '@angular/router';

const appRoutes = [
    {
        path: 'register',
        component: RegisterComponent,
    },
    {
        path: 'confirm',
        component: ConfirmComponent,
    },
    {
        path: '', 
        redirectTo: '/register', 
        pathMatch: 'full' 
    },
   
];


@NgModule({
    declarations: [
      
    ],
    imports: [
      BrowserModule,
      RouterModule.forRoot(appRoutes)
    ],
    exports: [ RouterModule ],
    providers: []
  })
  export class RoutingModule { }
  