import { Component, OnInit } from '@angular/core';
import { User } from "../user";
import { UsersService } from "../users.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: User[] = [];

  constructor(private usersService: UsersService) {
    // this.usersService.getAllUsers().subscribe((users: User[]) => {
    //   this.users = users;
    // });
  }

  ngOnInit() {
    this.users = this.usersService.getUsers();
  }

  onDelete(user) {
    this.usersService.deleteUser(user);
    this.users = this.usersService.getUsers();
  }
}
