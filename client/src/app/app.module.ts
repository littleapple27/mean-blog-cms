//Modules
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//Projects Modules
import { BlogAppSharedModule } from '../../projects/blogApp/src/app/app.module';

//Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { EventsComponent } from './components/events/events.component';
import { MainViewComponent } from './components/main-view/main-view.component';
import { LoginComponent } from './components/login/login.component';
import { UserListComponent } from './components/users/user-list/user-list.component';  // import validator
import { UserCreateComponent } from './components/users/user-create/user-create.component';

//Services
import { UserService } from './services/user-api.service';
import { ArticleService } from './services/article.service';

//Directives
//import { EqualValidator } from './components/users/user-create/directives/equal-validator.directive';

//Misc
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { UserDetailsComponent } from './components/users/user-details/user-details.component';

@NgModule({
  declarations: [AppComponent, UserListComponent, UserCreateComponent, NavbarComponent, DashboardComponent, ArticlesComponent, EventsComponent, MainViewComponent, LoginComponent, UserDetailsComponent],
  imports: [CommonModule, BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule, HttpClientModule, FroalaEditorModule.forRoot(), FroalaViewModule.forRoot(),BlogAppSharedModule.forRoot()],
  providers: [
    UserService,
    ArticleService],
  bootstrap: [AppComponent],
})
export class AppModule {}
