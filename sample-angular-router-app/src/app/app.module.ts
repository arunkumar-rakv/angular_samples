import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { SearchFilterPipe } from './searchfilter.pipe';
import { CanDeactivateGuard } from './can-deactivate.guard';
@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserDetailComponent,
    ReactiveFormComponent,
    SearchFilterPipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [CanDeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
