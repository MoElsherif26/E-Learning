import { SubjectService } from './../../../core/services/api_calls/subject.service';
import { ClassroomsService } from './../../../core/services/api_calls/classrooms.service';
import { Component, OnInit, signal } from '@angular/core';
import { Classroom } from '../../../core/interfaces/Classroom';
import { Subject } from '../../../core/interfaces/Subject';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
// Import NgIf and NgClass for template directives
import { NgIf, NgClass } from '@angular/common';
import { TeacherService } from '../../../core/services/api_calls/teacher.service';
import { Teacher } from '../../../core/interfaces/Teacher';
import { TeacherClassroomService } from '../../../core/services/api_calls/teacher-classroom.service';

@Component({
  selector: 'app-courses',
  // Add NgIf and NgClass to imports
  imports: [ReactiveFormsModule, NgIf, NgClass],
  templateUrl: './classrooms.component.html',
  styleUrl: './classrooms.component.scss',
})
export class ClassroomsComponent implements OnInit {
  subjects!: Subject[];
  addClassroomForm!: FormGroup;
  classRooms!: Classroom[];
  modal = signal(false);
  teachers!: Teacher[];
  demoImages: string[] = [
    'imgs/courses/1.jpg',
    'imgs/courses/2.jpg',
    'imgs/courses/3.jpg',
    'imgs/courses/4.png',
    'imgs/courses/5.jpg',
  ];

  constructor(
    private classroomsService: ClassroomsService,
    private toastr: ToastrService,
    private subjectService: SubjectService,
    private fb: FormBuilder,
    private teacherService: TeacherService,
    private teacherClassroomService: TeacherClassroomService
  ) {}

  ngOnInit(): void {
    this.initClassrooms();
    this.initSubjects();
    this.initTeachers();
    this.addClassroomForm = this.fb.group({
      // Make subjectId required
      subjectId: ['', [Validators.required]],
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
    });
  }

  

  // Helper getter for easy access to form controls in the template
  get f() {
    return this.addClassroomForm;
  }

  getRandomImage(classroom: Classroom): string {
    const index =
      parseInt(classroom.id.toString(), 10) % this.demoImages.length;
    return this.demoImages[index];
  }

  initClassrooms() {
    this.classroomsService.getClassrooms().subscribe({
      next: (res: any) => {
        this.classRooms = res;
      },
    });
  }

  initTeachers() {
    this.teacherService.getTeachers().subscribe({
      next: (res: any) => {
        this.teachers = res;
        console.log(this.teachers);
      },
    });
  }

  initSubjects() {
    this.subjectService.getSubjects().subscribe({
      next: (res: any) => {
        this.subjects = res;
      },
    });
  }

  openModal() {
    this.modal.set(true);
  }

  closeModal() {
    this.modal.set(false);
  }

  onCreateClassroom() {
    if (this.addClassroomForm.invalid) {
      this.addClassroomForm.markAllAsTouched();
      return;
    }
    this.classroomsService.addClassroom(this.addClassroomForm.value).subscribe({
      next: (res: any) => {
        this.toastr.success('Classroom Created Successfully');
        this.initClassrooms();
        // Close modal and reset form on success
        this.closeModal();
        this.addClassroomForm.reset();
      },
    });
  }
}
