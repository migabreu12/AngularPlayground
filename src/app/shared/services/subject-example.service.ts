import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectExampleService {
  public activatedEmitter = new Subject<boolean>();

  constructor() { }
}
