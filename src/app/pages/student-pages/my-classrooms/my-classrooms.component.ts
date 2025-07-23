import { Component, inject } from '@angular/core';
import { AuthService } from '../../../core/services/api_calls/auth.service';
import { StudentClassroomService } from '../../../core/services/api_calls/student-classroom.service';
import { Classroom } from '../../../core/interfaces/Classroom';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-my-classrooms',
  imports: [],
  templateUrl: './my-classrooms.component.html',
  styleUrl: './my-classrooms.component.scss',
})
export class MyClassroomsComponent {
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
    this.studentClassroomService
      .getClassroomsByStudentId(this.authService.userData?.Id)
      .subscribe({
        next: (res: any) => {
          this.classRooms = res;
        },
      });
  }

  getRandomImage(classroom: Classroom): string {
    const index =
      parseInt(classroom.id.toString(), 10) % this.demoImages.length;
    return this.demoImages[index];
  }
}
