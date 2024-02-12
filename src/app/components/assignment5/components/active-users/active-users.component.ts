import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/users.model';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html'
})
export class ActiveUsersComponent implements OnInit {
  public activeUsers: User[] = [];

  public constructor(private usersService: UsersService
    ) {};

  public ngOnInit(): void {
    this.activeUsers = this.usersService.getActiveUsers();

    this.usersService.userUpdatedEmitter.subscribe(() => {
      this.activeUsers = this.usersService.getActiveUsers();
    });
  }

  public setUserToInactive(user: User) {
    this.usersService.setStatus(user, false);
  }
}
