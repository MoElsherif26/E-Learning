import { AuthService } from './../../../core/services/api_calls/auth.service';
import { TeacherClassroomService } from './../../../core/services/api_calls/teacher-classroom.service';
import { Component, inject, OnInit, AfterViewInit } from '@angular/core';
import { Classroom } from '../../../core/interfaces/Classroom';

@Component({
  selector: 'app-classroom',
  templateUrl: './classroom.component.html',
  styleUrl: './classroom.component.scss',
})
export class ClassroomComponent implements OnInit {
  ngOnInit(): void {
    this.initClassroom();
    console.log(this.authService.userData?.Id);
  }
  teacherClassroomService = inject(TeacherClassroomService);
  authService = inject(AuthService);
  demoImage: string = 'imgs/courses/3.jpg';

  // demoImage: string[] = [
  //   'imgs/courses/1.jpg',
  //   'imgs/courses/2.jpg',
  //   'imgs/courses/3.jpg',
  //   'imgs/courses/4.png',
  //   'imgs/courses/5.jpg',
  // ];

  // getRandomImage(course: ICourse): string {
  //   const index = parseInt(course.id, 10) % this.demoImages.length;
  //   return this.demoImages[index];
  // }

  initClassroom() {
    this.authService.decodeData();
    this.teacherClassroomService
      .getClassroombyTeacherId(this.authService.userData?.Id as string)
      .subscribe({
        next: (res: any) => {
          this.classroom = res;
        },
      });
  }

  classroom!: Classroom;
}
