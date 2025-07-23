import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { AddSubjectRequestDto } from '../../interfaces/PostRequestPayloads';
import { ENDPOINTS } from '../../constants';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  http = inject(HttpClient);

  addSubject(payload: AddSubjectRequestDto) {
    return this.http.post(ENDPOINTS.SUBJECT.ADD_SUBJECT, payload);
  }

  getSubjects() {
    return this.http.get(ENDPOINTS.SUBJECT.GET_SUBJECTS);
  }

}
