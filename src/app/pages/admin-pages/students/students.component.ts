import { Component, OnInit } from '@angular/core';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { StudentService } from '../../../core/services/api_calls/student.service';
import { Student } from '../../../core/interfaces/Student';

@Component({
  selector: 'app-students',
  imports: [NgIf, NgFor, NgClass],
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss',
})
export class StudentsComponent implements OnInit {
  students!: Student[];
  constructor(private studentservice: StudentService) {}
  ngOnInit(): void {
    this.initstudents();
  }
  initstudents() {
    this.studentservice.getStudents().subscribe({
      next: (res: any) => {
        this.students = res;
        console.log(this.students);
      },
    });
  }
}
