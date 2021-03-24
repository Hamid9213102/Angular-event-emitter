import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AboutInfoComponent } from './about-info/about-info.component';
import { ChildComponent } from './child/child.component';
import { FormsModule } from '@angular/forms';
import { MyFirstAppComponent } from './my-first-app/my-first-app.component';
import { from } from 'rxjs';
import{UsersModule} from './users/users.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ParentToChildComponent } from './parent-to-child/parent-to-child.component';
import { ChildToParentComponent } from './child-to-parent/child-to-parent.component';
import { AdminComponent } from './admin/admin.component';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CustomStyleDirective } from './custom-style.directive'
import{CryptoService} from './crypto.service';
import {DamyDataService}from './damy-data.service';
import {HttpClientModule} from '@angular/common/http';
import { LazyLoginComponent } from './lazy-loading/lazy-login/lazy-login.component';
import { LazySignupComponent } from './lazy-loading/lazy-signup/lazy-signup.component';
import { MessageComponent } from './message/message.component';
import { PostMessageComponent } from './post-message/post-message.component';
import { DataComponent } from './data/data.component';
import { TransferComponent } from './transfer/transfer.component';
//import { LazyLoginComponent } from '';
//import { LazySigninComponent } from './lazy-signin/lazy-signin.component';
@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    AboutInfoComponent,
    ChildComponent,
    MyFirstAppComponent,
    HeaderComponent,
    FooterComponent,
    ParentToChildComponent,
    ChildToParentComponent,
    AdminComponent,
    AdminUserComponent,
    PageNotFoundComponent,
    CustomStyleDirective,
    LazyLoginComponent,
    LazySignupComponent,
    MessageComponent,
    PostMessageComponent,
    DataComponent,
    TransferComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    UsersModule,
   
    HttpClientModule
  ],
  providers: [CryptoService, DamyDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
