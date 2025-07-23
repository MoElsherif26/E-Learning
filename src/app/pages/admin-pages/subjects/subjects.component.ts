import { Component, inject, OnInit } from '@angular/core';
import { Subject } from '../../../core/interfaces/Subject';
import { SubjectService } from '../../../core/services/api_calls/subject.service';
import { ToastrService } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-subjects',
  imports: [FormsModule],
  templateUrl: './subjects.component.html',
  styleUrl: './subjects.component.scss',
})
export class SubjectsComponent implements OnInit {
  subjects!: Subject[];

  name!: string;

  subjectService = inject(SubjectService);

  toastr = inject(ToastrService);

  demoImages: string[] = [
    'imgs/courses/1.jpg',
    'imgs/courses/2.jpg',
    'imgs/courses/3.jpg',
    'imgs/courses/4.png',
    'imgs/courses/5.jpg',
  ];

  ngOnInit(): void {
    this.initSubjects();
  }

  initSubjects() {
    this.subjectService.getSubjects().subscribe({
      next: (res: any) => {
        this.subjects = res;
      },
    });
  }

  onCreateSubject() {
    this.subjectService.addSubject({ name: this.name }).subscribe({
      next: () => {
        this.toastr.success('New Subject Created Successfully');
        this.name = '';
        this.initSubjects();
      },
    });
  }

  getRandomImage(subject: Subject): string {
    const index = parseInt(subject.id.toString(), 10) % this.demoImages.length;
    return this.demoImages[index];
  }
}
