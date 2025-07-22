import { Component, inject, OnInit } from '@angular/core';
import { ClassroomsService } from '../../../core/services/api_calls/classrooms.service';
import { Classroom } from '../../../core/interfaces/Classroom';
import { AuthService } from '../../../core/services/api_calls/auth.service';
import { StudentClassroomService } from '../../../core/services/api_calls/student-classroom.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-courses',
  imports: [],
  templateUrl: './classrooms.component.html',
  styleUrl: './classrooms.component.scss',
})
export class ClassroomsComponent implements OnInit {
  classroomsService = inject(ClassroomsService);
  authService = inject(AuthService);
  studentClassroomService = inject(StudentClassroomService);
  classRooms!: Classroom[];
  toastr = inject(ToastrService);

  demoImages: string[] = [
    'imgs/courses/1.jpg',
    'imgs/courses/2.jpg',
    'imgs/courses/3.jpg',
    'imgs/courses/4.png',
    'imgs/courses/5.jpg',
  ];

  ngOnInit(): void {
    this.classroomsService.getClassrooms().subscribe({
      next: (res: any) => {
        this.classRooms = res;
      },
    });
  }

  addStudentToClassroom(classRoomId: number) {
    console.log(this.authService.userData?.Id);
    this.studentClassroomService
      .addStudentToClassroom({
        studentId: this.authService.userData?.Id,
        classroomId: classRoomId,
      })
      .subscribe({
        next: (res: any) => {
          this.toastr.success("You Joined This Class Room");
        },
      });
  }

  getRandomImage(classroom: Classroom): string {
    const index =
      parseInt(classroom.id.toString(), 10) % this.demoImages.length;
    return this.demoImages[index];
  }
}
