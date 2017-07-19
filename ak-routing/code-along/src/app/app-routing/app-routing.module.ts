import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common';

import { HomeComponent } from '../home/home.component';
import { ServersComponent } from '../servers/servers.component';
import { ServerComponent } from '../servers/server/server.component';
import { ServerEditComponent } from '../servers/server-edit/server-edit.component';
import { UsersComponent } from '../users/users.component';
import { UserComponent } from '../users/user/user.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { ErrorPageComponent } from '../error-page/error-page.component';
import { AuthGuardService } from '../auth-guard.service';
import { CanDeactivateGuard } from '../servers/server-edit/can-deactivate-guard.service';
import { ServerResolverService } from '../servers/server/server-resolver.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'servers',
    //canActivate: [AuthGuardService],
    canActivateChild: [AuthGuardService],
    component: ServersComponent,
    children: [
      { path: ':id',
        component: ServerComponent,
        resolve: {server: ServerResolverService} },
      { path: ':id/edit',
        component: ServerEditComponent,
        canDeactivate: [CanDeactivateGuard] }
    ]},
  { path: 'users', component: UsersComponent,
    children: [
      { path: ':id/:name', component: UserComponent }
    ]},
  // { path: 'page-not-found', component: PageNotFoundComponent },
  { path: 'error-page',
    component: ErrorPageComponent,
    data: {
      error: {
        number: 404,
        message: 'Page not found.'
      }
    }
  },
  { path: '**', redirectTo: 'error-page' }
]

@NgModule({
  imports: [
    CommonModule,
    // RouterModule.forRoot(appRoutes, {useHash: true}), // rare case, used for older servers unable to parse URLs
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
