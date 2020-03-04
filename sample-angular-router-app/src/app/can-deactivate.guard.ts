import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

@Injectable()
export class CanDeactivateGuard implements CanDeactivate<ReactiveFormComponent> {
  canDeactivate(component: ReactiveFormComponent): boolean {

    if (component.hasUnsavedData()) {
      if (confirm("You have unsaved changes! If you leave, your changes will be lost.")) {
        return true;
      } else {
        return false;
      }
    }
    return true;
  }
}