import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing/app-routing.module'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServersComponent } from './servers/servers.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { ServerComponent } from './servers/server/server.component';
import { ServerEditComponent } from './servers/server-edit/server-edit.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ErrorPageComponent } from './error-page/error-page.component';

import { ServersService } from './servers/servers.service';
import { UsersService } from './users/users.service';
import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service';
import { CanDeactivateGuard } from './servers/server-edit/can-deactivate-guard.service';
import { ServerResolverService } from './servers/server/server-resolver.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServersComponent,
    UsersComponent,
    UserComponent,
    ServerComponent,
    ServerEditComponent,
    PageNotFoundComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ServersService,
    UsersService,
    AuthGuardService,
    AuthService,
    CanDeactivateGuard,
    ServerResolverService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
