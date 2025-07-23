import { Component, OnInit } from '@angular/core';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { TeacherService } from '../../../core/services/api_calls/teacher.service';
import { Teacher } from '../../../core/interfaces/Teacher';

@Component({
  selector: 'app-teachers',
  imports: [NgIf, NgFor, NgClass],
  templateUrl: './teachers.component.html',
  styleUrl: './teachers.component.scss',
})
export class TeachersComponent implements OnInit {
  teachers!: Teacher[];
  constructor(private teacherService: TeacherService) {}
  ngOnInit(): void {
    this.initTeachers();
  }
  initTeachers() {
    this.teacherService.getTeachers().subscribe({
      next: (res: any) => {
        this.teachers = res;
        console.log(this.teachers);
      },
    });
  }
}
