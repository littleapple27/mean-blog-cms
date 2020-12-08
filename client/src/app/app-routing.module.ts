import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ActivityFeedComponent } from './components/activity-feed/activity-feed.component';

import { PortalComponent } from './components/portal/portal.component';

import { UserCreateComponent } from './components/users/user-create/user-create.component';
import { UserListComponent } from './components/users/user-list/user-list.component'; 
import { UserPwComponent } from './components/users/user-pw/user-pw.component';  

import { ArticleListComponent } from './components/articles/article-list/article-list.component';
import { ArticleCreateComponent } from './components/articles/article-create/article-create.component';
import { ArticleReadComponent } from './components/articles/article-read/article-read.component';

import { EventsComponent } from './components/events/events.component';

const routes: Routes = [
  //Seperate Login Route
  { path: '', 
    component: LoginComponent,
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
 
  {
    path: 'portal', 
    component: PortalComponent,
    children: [{
      path: 'recent',
      component: ActivityFeedComponent,
      outlet: 'mainView'
    }, {
    //User child routing
      path: 'users',
      component: UserListComponent,
        outlet: 'mainView',
      },
      { path: 'users/create', 
        component: UserCreateComponent,
        outlet: 'mainView'
      },
      {
        path: 'users/pw/:id', 
        component: UserPwComponent,
        outlet: 'mainView',
      },

      //Article child routing
      {
        path: 'articles',
        component: ArticleListComponent,
        outlet: 'mainView'
      },
      { path: 'articles/create', 
        component: ArticleCreateComponent,
        outlet: 'mainView'
      },
      {
        path: 'articles/:id', 
        component: ArticleReadComponent,
        outlet: 'mainView',
      },
    ]
  },
  { path: '**', redirectTo: '' }
 
  

  // //user routing 

  // { path: 'users/create', 
  //   component: UserCreateComponent,
  // data: {
  //   title: 'Create New User'
  // }
  // },
  // {
  //   path: 'users/pw/:id', 
  //   component: UserPwComponent,
  //   outlet: 'mainView',
  // data: {
  //   title: 'Change Password'
  // }
  // },
  // //article routing
  // { path: 'articles', 
  //   component: ArticleListComponent,
  //   data: {
  //     title: 'Articles List'
  //   }
  // },
  // { path: 'articles/create', 
  //   component: ArticleCreateComponent,
  //   data: {
  //     title: 'Create New Article'
  //   }
  // },
  // { path: 'articles/:id', 
  //   component: ArticleReadComponent,
  //   data: {
  //     title: 'Read Article'
  //   }
  // },
  // //events routing (TBD)
  // { path: 'events', 
  //   component: EventsComponent,
  //   data: {
  //     title: 'Manage Events'
  //   }
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
