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

  @Output() userUpdatedEmitter: EventEmitter<string[]>;

  constructor() { }

  public getActiveUsers(): User[] {
    return this.users.filter(x => x.isActiveStatus == true);
  }
}
