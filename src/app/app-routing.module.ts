import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TablesComponent } from './tables/tables.component';
import { CardsComponent } from './cards/cards.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ParentComponent } from './parent/parent.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
    {path:'', component : LoginComponent}, 
    {path:'home', component : HomeComponent, canActivate : [AuthGuard]},
    {path:'parent', component : ParentComponent, canActivate : [AuthGuard] },
    {path:'employees', component : TablesComponent, canActivate : [AuthGuard] },
    {path:'products', component : CardsComponent, canActivate : [AuthGuard] },
    {path:'**', component : NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
