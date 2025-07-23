import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ENDPOINTS } from '../../constants';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor(private http: HttpClient) {}

  getStudents() {
    return this.http.get(ENDPOINTS.STUDENT.GET_STUDENTS);
  }
}
