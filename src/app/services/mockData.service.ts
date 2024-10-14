import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { formatDate } from '@angular/common';
import { IVacancies } from '../models/IVacancies';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {
  vacancies: IVacancies[] = [
    {
      id: 1,
      name: 'Front-end developer',
      beginDate: formatDate(new Date(), 'yyyy-MM-dd', 'en'),
      endDate: '2024-10-18',
      location: 'Bakı',
      salary: '1500-1700',
      email: "test@gmail.com",
      details: [
        'Front-end arxitekturanı davamlı təkmilləşdirmək.',
        'Komponentlərin maksimum performans üçün optimallaşdırılması.',
        'Cihaz və brauzerlər arasında performansı təmin etmək üçün kodun sazlanması və optimallaşdırılması.',
        'Kod review-da iştirak.'
      ],
      requirement: [
        'Sahə üzrə minimum 2 il iş təcrübəsi.',
        'JavaScript üzrə dərin biliklər (DOM manipulasiyası, ES6 daxil olmaqla).',
        'TypeScript və TSX ilə praktiki təcrübə.',
        'CI/CD pipeline və tool-ları haqqında məlumat.'
      ]
    },
    {
      id: 2,
      name: 'Baş mühasib',
      beginDate: formatDate(new Date(), 'yyyy-MM-dd', 'en'),
      endDate: '2024-10-22',
      location: 'Sumqayıt',
      salary: 'Razılaşma ilə',
      email: "test1@gmail.com",
      details: [
        'Mühasibat, vergi uçotu və DSMF, Statistika ilə bağlı əməliyyatlar aparmaq.',
        'Müəssisə tərəfindən həyata keçirilən bütün təsərrüfat əməliyyatlarının mühasibat uçotu hesabında (həmçinin uçotu registrlərində) düzgün əks etdirilməsini təmin etmək.',
        'Pul vəsaitlərinin, əmtəə-mal qiymətlilərinin və əsas fondların inventarlaşmasının aparılmasını təmin etmək.',
        'Mühasibat sənədlərinin çoxaldılması, tərtib edilməsi və arxivə təhvil verilməsinin müəyyən edilmiş qaydada yerinə yetirilməsinə nəzarət etmək.',
        'Hesabatların düzgün şəkildə verilməsi.',
      ],
      requirement: [
        'Ali təhsil (maliyyə, mühasibatlıq üzrə).',
        'PMS Sertifikatı üstünlükdür.',
        'Müvafiq sahədə 3-5 il və üzəri iş təcrübəsi.',
        'MS Office proqramlarında, Exceldə əla işləmə bacarığı.',
        'Dəqiqlik, detallara fikir vermə qabiliyyəti.'
      ]
    },

  ]


  testQuestionsData:any[] = [
    {
      question: '1 Hansi duzgun cavabdir?',
      answer: 1,
      selected: 0,
      options: [
        {
          value: 1,
          text: 'Answer 1'
        },
        {
          value: 2,
          text: 'Answer 2'
        },
        {
          value: 3,
          text: 'Answer 3'
        },
      ]
    },

    {
      question: '2 Hansi duzgun cavabdir 2?',
      answer: 3,
      selected: 0,
      options: [
        {
          value: 1,
          text: 'Answer 2.1'
        },
        {
          value: 2,
          text: 'Answer 2.2'
        },
        {
          value: 3,
          text: 'Answer 2.3'
        },
      ]
    },

    {
      question: '3 Hansi duzgun cavabdir 2?',
      answer: 2,
      selected: 0,
      options: [
        {
          value: 1,
          text: 'Answer 2.1'
        },
        {
          value: 2,
          text: 'Answer 2.2'
        },
        {
          value: 3,
          text: 'Answer 2.3'
        },
      ]
    },
  ]
}
