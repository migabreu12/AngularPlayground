import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor() { }

  public logMessage(message: string) {
    console.log(`The message was ${message}`);
  }
}
