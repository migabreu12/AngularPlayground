import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/users.model';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.scss']
})
export class ActiveUsersComponent implements OnInit {
  public activeUsers: User[] = [];

  public constructor(private userService: UsersService
    ) {};

  public ngOnInit(): void {
    this.activeUsers = this.userService.getActiveUsers();
  }
}
