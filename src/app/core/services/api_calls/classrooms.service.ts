import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ENDPOINTS } from '../../constants';

@Injectable({
  providedIn: 'root'
})
export class ClassroomsService {

  http = inject(HttpClient);

  constructor() { }

  getClassrooms() {
    return this.http.get(ENDPOINTS.CLASSROOM.GET_CLASSROOMS);
  }
}
