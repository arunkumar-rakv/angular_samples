import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserListComponent } from './user-list/user-list.component';
import { ReactiveFormComponent } from '../app/reactive-form/reactive-form.component';
import { CanDeactivateGuard } from './can-deactivate.guard';

const routes: Routes = [
  { path: 'users', component: UserListComponent },
  { path: 'user/:id', component: UserDetailComponent },
  { path: 'reactive-form', component: ReactiveFormComponent, canDeactivate: [CanDeactivateGuard] },
  { path: 'reactive-form/:id', component: ReactiveFormComponent, canDeactivate: [CanDeactivateGuard] },
  { path: '', redirectTo: '/users', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
