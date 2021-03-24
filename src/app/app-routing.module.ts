import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import{AdminComponent} from './admin/admin.component';
import{AdminUserComponent} from './admin-user/admin-user.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"contact",component:ContactComponent},
  {path:"about",component:AboutComponent},
  {path:"admin",component:AdminComponent},
  {path:"adminUser",component:AdminUserComponent},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
