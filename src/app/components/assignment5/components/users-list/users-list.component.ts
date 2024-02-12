import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../models/users.model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html'
})
export class UsersListComponent {
  @Output() emitSetStatus : EventEmitter<User> = new EventEmitter<User>();
  @Input() users: User[] = [];
  @Input() title: string = "Users List";

  public emitSetActiveStatus(user: User) {
    this.emitSetStatus.emit(user);
  }
}
