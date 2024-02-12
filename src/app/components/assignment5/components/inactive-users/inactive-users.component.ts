import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/users.model';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html'
})
export class InactiveUsersComponent implements OnInit {
  public inactiveUsers: User[] = [];

  public constructor(private usersService: UsersService) {}

  public ngOnInit(): void {
    this.inactiveUsers = this.usersService.getInactiveUsers();

    this.usersService.userUpdatedEmitter.subscribe(() => {
      this.inactiveUsers = this.usersService.getInactiveUsers();
    });
  }

  public setStatusToActive(user: User) {
    this.usersService.setStatus(user, true);
  }
}
