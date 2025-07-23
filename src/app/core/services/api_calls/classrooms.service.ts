import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ENDPOINTS } from '../../constants';
import { AddClassroomRequestDto } from '../../interfaces/PostRequestPayloads';

@Injectable({
  providedIn: 'root'
})
export class ClassroomsService {

  http = inject(HttpClient);

  constructor() { }

  getClassrooms() {
    return this.http.get(ENDPOINTS.CLASSROOM.GET_CLASSROOMS);
  }

  addClassroom(payload: AddClassroomRequestDto) {
    return this.http.post(ENDPOINTS.CLASSROOM.ADD_CLASSROOM, payload);
  }
}
