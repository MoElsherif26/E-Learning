import { AddStudentToClassroomRequestDto } from './../../interfaces/PostRequestPayloads';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ENDPOINTS } from '../../constants';

@Injectable({
  providedIn: 'root',
})
export class StudentClassroomService {
  http = inject(HttpClient);

  constructor() {}

  addStudentToClassroom(payload: AddStudentToClassroomRequestDto) {
    return this.http.post(
      ENDPOINTS.STUDENT_CLASSROOM.ADD_STUDENT_TO_CLASSROOM,
      payload
    );
  }
  getClassroomsByStudentId(studentId?: string) {
    return this.http.get(`${ENDPOINTS.STUDENT_CLASSROOM.GET_CLASSROOMS_BY_STUDENT_ID}/${studentId}`);
  }
}
