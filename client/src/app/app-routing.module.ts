import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { UserCreateComponent } from './components/users/user-create/user-create.component';
import { UserListComponent } from './components/users/user-list/user-list.component';  
import { UserDetailsComponent } from './components/users/user-details/user-details.component';  


import { ArticlesComponent } from './components/articles/articles.component';
import { EventsComponent } from './components/events/events.component';

const routes: Routes = [
  { path: '', 
    component: DashboardComponent,
    data: {
      title: 'Login'
    },
  },
  { path: 'dashboard', 
    component: DashboardComponent,
    data: {
      title: 'Dashboard'
    }
  },
  //user routing 
  { path: 'users', 
    component: UserListComponent,
  data: {
    title: 'User Accounts'
  }
  },
  { path: 'users/create', 
    component: UserCreateComponent,
  data: {
    title: 'Create New User'
  }
  },
  { path: 'users/:id', 
    component: UserDetailsComponent,
  data: {
    title: 'User Details'
  }
  },
//   { path: 'user-update/:id', 
//     component: UserUpdateComponent,
//   data: {
//     title: 'Update User'
//   }
//   },
  //article routing
  { path: 'articles', 
    component: ArticlesComponent,
    data: {
      title: 'Manage Articles'
    }
  },
  { path: 'events', 
    component: EventsComponent,
    data: {
      title: 'Manage Events'
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
