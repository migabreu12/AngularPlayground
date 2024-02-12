import { EventEmitter, Injectable, Output } from '@angular/core';
import { User } from '../models/users.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public users:  User[]= [
    {
      name: "Sam",
      isActiveStatus: true
    },
    {
      name: "Charlie",
      isActiveStatus: true
    },
    {
      name: "Ragnarok",
      isActiveStatus: false
    }
  ];

  @Output() userUpdatedEmitter: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  public getActiveUsers(): User[] {
    return this.users.filter(x => x.isActiveStatus);
  }

  public getInactiveUsers(): User[] {
    return this.users.filter(x => !x.isActiveStatus)
  }

  public setStatus(user: User, activeStatus: boolean) {
    this.users.find(existingUser => existingUser == user).isActiveStatus = activeStatus;
    this.userUpdatedEmitter.emit();
  }
}
