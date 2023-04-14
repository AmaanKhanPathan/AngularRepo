import { Component } from '@angular/core';
import { Istd } from './interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'pipeDemo';
  totalMarks = 600;

  employees: Array<Istd> = [

    {
      name: "aman",
      course: "BTECH",
      marks: 520,
      DOB: new Date('01-07-1995'),
      gender: "Male",
      package : 800000
    },
    {
      name: "varsha jadhav",
      course: "MSC",
      marks: 420,
      DOB: new Date('09-12-1994'),
      gender: "Female",
      package : 1000000
    },
    {
      name: "amreen bano",
      course: "MBA",
      marks: 540,
      DOB: new Date('05-08-1996'),
      gender: "Female",
      package : 1200000
    },
    {
      name: "rohini harnal",
      course: "BTECH",
      marks: 520,
      DOB: new Date('11-12-1994'),
      gender: "Female",
      package : 1500000
    },
    {
      name: "ravi sir",
      course: "masterInAll",
      marks: 550,
      DOB: new Date('08-10-1990'),
      gender: "Male",
      package : 3000000
    },
    {
      name: "ranju",
      course: "MBA",
      marks: 430,
      DOB: new Date('05-08-1997'),
      gender: "Female",
      package : 1100000
    }

  ];

}


