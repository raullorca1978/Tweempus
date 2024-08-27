import { Injectable } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { Observable,catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TwimpService {

  constructor() { }
}
