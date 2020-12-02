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
import { PortalComponent } from './components/portal/portal.component';
import { EventsComponent } from './components/events/events.component';
import { MainViewComponent } from './components/main-view/main-view.component';
import { LoginComponent } from './components/login/login.component';
import { UserListComponent } from './components/users/user-list/user-list.component';  // import validator
import { UserCreateComponent } from './components/users/user-create/user-create.component';
import { ArticleListComponent } from './components/articles/article-list/article-list.component';
import { ArticleCreateComponent } from './components/articles/article-create/article-create.component';
import { ArticleReadComponent } from './components/articles/article-read/article-read.component';

//Services
import { UserService } from './services/user-api.service';
import { ArticleService } from './services/article.service';

//Directives
import { EqualValidator } from './directives/equal-validator.directive';
import { StripHtmlTagsPipe } from './directives/strip-html.directive';


//Misc
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { UserPwComponent } from './components/users/user-pw/user-pw.component';
import { ActivityFeedComponent } from './components/activity-feed/activity-feed.component';


@NgModule({
  declarations: [AppComponent, UserListComponent, UserCreateComponent, NavbarComponent, PortalComponent, ArticleListComponent, EventsComponent, MainViewComponent, LoginComponent, UserPwComponent, EqualValidator, ArticleCreateComponent, ArticleReadComponent, StripHtmlTagsPipe, ActivityFeedComponent],
  imports: [CommonModule, BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule, HttpClientModule, BlogAppSharedModule.forRoot(), FroalaEditorModule.forRoot(), FroalaViewModule.forRoot()],
  providers: [
    UserService,
    ArticleService],
  bootstrap: [AppComponent],
})
export class AppModule {}
