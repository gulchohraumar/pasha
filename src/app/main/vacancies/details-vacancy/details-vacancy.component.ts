import { Component, inject, ViewChild } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatRadioChange } from '@angular/material/radio';
import { MatStepper } from '@angular/material/stepper';
import { ActivatedRoute } from '@angular/router';
import { IVacancies, IVacanciesAllQuestions } from 'src/app/models/IVacancies';
import { MockDataService } from 'src/app/services/mockData.service';
import { swalInfo } from 'src/app/utils/alerts';
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
  ) { 
    this.ActivatedRoute.paramMap.subscribe(params => {
      let id = Number(params.get('id'));
      this.vacancyData = this.data.vacancies.filter((dt: IVacancies) => dt.id == id)[0];
      this.questions = this.data.vacanciesQuestion.filter((dt: IVacanciesAllQuestions) => dt.vacancyId == id)[0].data
    });
  }

  appealFormGroup = this.fb.group({
    fullname: ['', Validators.required],
    email: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)]],
    phoneNumber: ['', [Validators.required, Validators.minLength(10)]],
  });

  vacancyData!: IVacancies;
  @ViewChild('stepper') stepper!: MatStepper;

  isAppealValid = true;
  stepClickAppeal() {
    if (this.appealFormGroup.valid) {
      this.isAppealValid = true
      this.display = null;
      Swal.fire({
        allowOutsideClick: false,
        title: 'İmtahan qaydaları',
        text: `İmtahan ümumi ${this.questions.length} sualdan ibarətdir. Hər sual üçün sizə 1 dəqiqə vaxt verilir və imtahan ${this.questions.length} dəqiqə çəkir. Sonrakı suala keçdikdən sonra geri qayıdıb əvvəlki sualı dəyişdirmək imkanınız yoxdur.`,
        icon: 'warning',
        confirmButtonColor: '#266AB8',
        confirmButtonText: 'İmtahana başla',
      }).then((result) => {
        if (result.isConfirmed) {
          this.timer(this.questions.length);
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
          text: 'Hörmətli istifadəçi, təəsüf ki, imtahanın vaxtı bitmişdir! Əvvəlki cavablarınız yadda saxlanılmışdır.',
          icon: 'warning',
          confirmButtonColor: '#266AB8',
          confirmButtonText: 'Bağla',
        }).then((result) => {
          if (result.isConfirmed) {
            this.setNextStepper(this.stepper);
          }
        });
      }
    }, 1000);
  }

  ngAfterViewInit() {
    this.stepper._getIndicatorType = () => 'number';
  }

  currentIndex: number = 0;
  currentQuestionSet: any;
  isAnswered: boolean = true;
  questions: any[] = [];
  setAnswer(event: MatRadioChange) {
    this.currentQuestionSet ? this.currentQuestionSet.selected = String(event.value) : '';
    this.isAnswered = true;
  }

  next(stepper: any) {
    if (this.currentQuestionSet && !this.currentQuestionSet?.selected) {
      this.isAnswered = false;
      return
    } // not selected answer

    if (this.questions.length != this.currentIndex) { //if it is not last question
      this.currentIndex = this.currentIndex + 1;
      this.currentQuestionSet = this.questions[this.currentIndex - 1];
    }

    else {
      this.setNextStepper(stepper)
    }
  }

  setNextStepper(stepper: MatStepper) {
    stepper.selected!.completed = true;
    stepper.next();
  }

  fileLocalUrl = '';
  fileName = '';
  file?: File | null = null;
  fileResult: string | ArrayBuffer | null = null;
  uploadFile(event: any) {
    if (event.target.files[0].size > 5242880) {
      swalInfo('Daxil etdiyiniz faylın ölçüsü 5MB-dan çox ola bilməz!')
      return;
    }

    this.fileLocalUrl = URL.createObjectURL(event.target.files[0])
    this.file = event.target.files[0];
    this.fileResult = event.target.result;
    this.fileName = event.target.files[0].name;

  }

  correctAnswerCount = 0;
  incorrectAnswerCount = 0;
  successModel: any;
  handleSend() {
     if(this.file){
      this.questions.map((dt: any) => {
        dt.answer == Number(dt.selected) ? this.correctAnswerCount = this.correctAnswerCount + 1 : this.incorrectAnswerCount = this.incorrectAnswerCount + 1;
      })
      this.successModel = {
        correctCount: this.correctAnswerCount,
        incorrectCount: this.incorrectAnswerCount,
        totalCount: this.questions.length
      }
     } else swalInfo('Zəhmət olmasa, CV-zi əlavə edin!')
  }

}
