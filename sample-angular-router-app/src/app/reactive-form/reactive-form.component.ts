import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service';
import { User } from '../user';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  reactiveForm: FormGroup;
  formSubmitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UsersService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    if (this.activatedRoute.snapshot.params.id)
      this.getUser(this.activatedRoute.snapshot.params.id);
    this.reactiveForm = this.formBuilder.group({
      id: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email, this.emailValidator.bind(this)]],
      phone: ['', Validators.required],
      website: ['', Validators.required]
    });
  }

  get reactiveFormControls() { return this.reactiveForm.controls; }

  onSubmit() {
    this.formSubmitted = true;
    if (this.reactiveForm.invalid) {
      return;
    }
    if (this.activatedRoute.snapshot.params.id) {
      this.userService.updateUser(this.reactiveForm.value).subscribe((user: any) => {
        if (user)
          this.router.navigateByUrl('/users');
      });
    } else {
      this.userService.createUser(this.reactiveForm.value).subscribe((user: any) => {
        if (user)
          this.router.navigateByUrl('/users');
      });
    }
  }

  getUser(id) {
    this.userService.getUserByID(id).subscribe((user: User) => {
      this.reactiveForm.setValue({
        id: user.id,
        username: user.username,
        email: user.email,
        phone: user.phone,
        website: user.website
      });
    })
  }

  hasUnsavedData(): boolean {
    return !this.formSubmitted && this.reactiveForm.dirty
  }

  emailValidator(control: FormControl) {
    let existingUser = this.userService.getUsers().find(user => user.email == control.value);
    return existingUser ? { emailTaken: true } : null;
  }
}
