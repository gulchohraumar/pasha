import { Component, inject, ViewChild } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { ActivatedRoute } from '@angular/router';
import { IVacancies } from 'src/app/models/IVacancies';
import { MockDataService } from 'src/app/services/mockData.service';
import { swalConfirm } from 'src/app/utils/alerts';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-details-vacancy',
  templateUrl: './details-vacancy.component.html',
  styleUrls: ['./details-vacancy.component.scss']
})
export class DetailsVacancyComponent {

  constructor(
    private data: MockDataService,
    private fb: FormBuilder,
    public mockDataService: MockDataService,
    private ActivatedRoute: ActivatedRoute,
  ) { }

  @ViewChild('stepper') stepper: any;

  appealFormGroup = this.fb.group({
    fullname: ['', Validators.required],
    email: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)]],
    phoneNumber: ['', [Validators.required, Validators.minLength(10)]],
  });

  isAppealValid = true;
  stepClickAppeal() {
    if (this.appealFormGroup.valid) {
      this.isAppealValid = true

      Swal.fire({
        title: 'İmtahan qaydaları',
        text: 'İmtahan ümumi 15 sualdan ibarətdir. Hər sual üçün sizə 1 dəqiqə vaxt verilir və imtahan 15 dəqiqə çəkir. Sonrakı suala keçdikdən sonra geri qayıdıb əvvəlki sualı dəyişdirmək imkanınız yoxdur.',
        icon: 'warning',
        confirmButtonColor: '#266AB8',
        confirmButtonText: 'İmtahana başla',
      }).then((result) => {
        if (result.isConfirmed) {
          this.timer(1);
          this.next('');
        }
      })

    } else this.isAppealValid = false
  }

  display: any;
  timer(minute: number) {
    let seconds: number = minute * 60;
    let textSec: any = "0";
    let statSec: number = 60;

    const prefix = minute < 10 ? "0" : "";

    const timer = setInterval(() => {
      seconds--;
      if (statSec != 0) statSec--;
      else statSec = 59;

      if (statSec < 10) {
        textSec = "0" + statSec;
      } else textSec = statSec;

      this.display = `${prefix}${Math.floor(seconds / 60)}:${textSec}`;

      if (seconds == 0) {
        clearInterval(timer);

        Swal.fire({
          text: 'Hörmətli istifadəçi, təəsüf ki, imtahanın vaxtı bitmişdir!',
          // text: 'İmtahan ümumi 15 sualdan ibarətdir. Hər sual üçün sizə 1 dəqiqə vaxt verilir və imtahan 15 dəqiqə çəkir. Sonrakı suala keçdikdən sonra geri qayıdıb əvvəlki sualı dəyişdirmək imkanınız yoxdur.',
          icon: 'warning',
          confirmButtonColor: '#266AB8',
          confirmButtonText: 'Bağla',
        }).then((result) => {
          if (result.isConfirmed) {
            
          }
        });
      }
    }, 1000);
  }

  ngAfterViewInit() {
    this.stepper._getIndicatorType = () => 'number';
  }

  vacancyData!: IVacancies;
  ngOnInit() {
    this.ActivatedRoute.paramMap.subscribe(params => {
      let id = Number(params.get('id'));
      this.vacancyData = this.data.vacancies.filter((dt: any) => dt.id == id)[0];
    });
  }

  fileLocalUrl = '';
  fileName = '';
  file?: File | null = null;
  fileResult: string | ArrayBuffer | null = null;

  uploadFile(event: any) {
    this.fileLocalUrl = URL.createObjectURL(event.target.files[0])
    this.file = event.target.files[0];
    this.fileResult = event.target.result;
    this.fileName = event.target.files[0].name;
  }

  currentIndex: number = 0;
  currentQuestionSet: any;
  isAnswered: boolean = true;

  next(stepper: any) {
    if (this.currentQuestionSet && !this.currentQuestionSet?.selected) {  
      this.isAnswered = false;
      return
    } // not selected answer

    this.isAnswered = true;
    if (this.mockDataService.testQuestionsData.length != this.currentIndex) { //if it is not last question
      this.currentIndex = this.currentIndex + 1;
      this.currentQuestionSet = this.mockDataService.testQuestionsData[this.currentIndex - 1];
    }

    else {
      stepper.selected!.completed = true;
      stepper.next();
    }
  }

  handleSend(){
    
  }

}
