import { Component, inject, ViewChild } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  @ViewChild('stepper') stepper: any;

  appealFormGroup = this.fb.group({
    fullname: ['', Validators.required],
    email: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)]],
    phoneNumber: ['', [Validators.required, Validators.minLength(10)]],
  });

  secondFormGroup = this.fb.group({
    secondCtrl: [''],
  });

  isAppealValid = true;
  get AF(): { [key: string]: AbstractControl } {
    return this.appealFormGroup.controls;
  }

  stepClickAppeal() {
    if (this.appealFormGroup.valid) {
      this.isAppealValid = true

      Swal.fire({
        title: 'İmtahan qaydaları',
        text: 'İmtahan ümumi 15 sualdan ibarətdir. Hər sual üçün sizə 1 dəqiqə vaxt verilir və imtahan 15 dəqiqə çəkir. Sonrakı suala keçdikdən sonra geri qayıdıb əvvəlki sualı dəyişdirmək imkanınız yoxdur.',
        icon: 'warning',
        confirmButtonColor: '#266AB8',
        confirmButtonText: 'Başa düşdüm',
      }).then((result) => {
        if (result.isConfirmed) {


        }
      })

    } else this.isAppealValid = false
  }

  isFirst = false;
  isSecond = false;
  ngAfterViewInit() {
    this.stepper._getIndicatorType = () => 'number';
  }
  // stepClick(event:any){
  //   console.log(event.selectedIndex)
  //   this.appealFormGroup.valid && event.selectedIndex == 1 ? this.isFirst= true : this.isFirst= false

  // }

  constructor(
    private data: MockDataService,
    private fb: FormBuilder,
    private mockDataService: MockDataService,
    private ActivatedRoute: ActivatedRoute,
  ) { }

  vacancyData!: IVacancies;

  examFormGroup = this.fb.group({
    // isValid: false,
    // questions: this.fb.array([])
  })

  // get questions() {
  //   return this.examFormGroup.get("questions") as FormArray;
  // }

  // currentIndex = 0;
  // next() {
  //   this.questions.push(this.newLangs(this.mockDataService.testQuestionsData[this.currentIndex]))
  //   this.currentIndex = this.currentIndex + 1;

  //   console.log(this.questions)
  // }

  // newLangs(dt: any): FormGroup {
  //   console.log(dt.options)
  //   return this.fb.group({
  //     value: dt.value,
  //     text: dt.text
  //   });
  // }

  ngOnInit() {
    this.ActivatedRoute.paramMap.subscribe(params => {
      let id = Number(params.get('id'));
      this.vacancyData = this.data.vacancies.filter((dt: any) => dt.id == id)[0];
    });
  }

  // next() {
  //   this.currentIndex = this.currentIndex + 1;
  //   this.currentQuestionSet = this.questions[this.currentIndex];
  // }

}
