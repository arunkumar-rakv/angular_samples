import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { UsersService } from "../users.service";
import { User } from '../user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  user: User = new User(0, "", "", "", "");

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private gitusersService: UsersService) {
    // this.login = this.router.getCurrentNavigation().extras.state.login;
    // console.log("this.activatedRoute.snapshot.params", this.activatedRoute.snapshot.params);
  }

  ngOnInit() {
    this.gitusersService.getUserByID(this.activatedRoute.snapshot.params.id).subscribe((user: User) => {
      this.user = user;
    })
  }

}
