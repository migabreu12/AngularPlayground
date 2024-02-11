import { Injectable } from '@angular/core';

// Using the following way to import a service into the app module is a better way than traditional methods (using providers) since
// this import allows for lazy loading.
@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor() { }

  public logMessage(message: string) {
    console.log(`The message was ${message}`);
  }
}
