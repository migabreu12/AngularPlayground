import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  @Output() loggedInStateObservable: EventEmitter<boolean> = new EventEmitter<boolean>;
  private loggedInState = false;

  constructor() { }

  public logIn(): void {
    this.loggedInState = true;
    this.loggedInStateObservable.emit(this.loggedInState);
  }

  public logOut(): void  {
    this.loggedInState = false;
    this.loggedInStateObservable.emit(this.loggedInState);
  }

  public isAuthenticated(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loggedInState),
        800
      });
    })
  }
}
