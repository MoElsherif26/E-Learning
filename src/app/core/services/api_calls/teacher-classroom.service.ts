import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { AddTeacherToClassroomRequestDto } from '../../interfaces/PostRequestPayloads';
import { ENDPOINTS } from '../../constants';

@Injectable({
  providedIn: 'root',
})
export class TeacherClassroomService {
  http = inject(HttpClient);

  constructor() {}

  addTeacherToClassroom(payload: AddTeacherToClassroomRequestDto) {
    return this.http.post(
      ENDPOINTS.TEACHER_CLASSROOM.ADD_TEACHER_TO_CLASSROOM,
      payload
    );
  }

  getClassroombyTeacherId(teacherId?: string) {
    return this.http.get(
      `${ENDPOINTS.TEACHER_CLASSROOM.GET_CLASSROOM_BY_TEACHER_ID}/${teacherId}`,
      {
        headers: {
          'X-Skip-Toastr': 'true',
        },
      }
    );
  }
}
