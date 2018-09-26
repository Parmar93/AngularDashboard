import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class UtilityService {
  sidebar = new BehaviorSubject<boolean>(false);
  constructor() { }
}
