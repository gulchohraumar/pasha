import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { formatDate } from '@angular/common';
import { ITestQuestion, IVacancies, IVacanciesAllQuestions } from '../models/IVacancies';

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
      ],
      status: true,
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
      ],
      status: true,
    },

  ]

  frontTestQuestionsData: ITestQuestion[] = [
    {
      id: 0,
      question: 'What is the difference between == and === in JavaScript?',
      answer: 1,
      selected: 0,
      options: [
        {
          value: 1,
          text: '== checks for value equality with type coercion, whereas === checks for both value and type equality without type coercion.'
        },
        {
          value: 2,
          text: 'Both check value equality without type coercion.'
        },
        {
          value: 3,
          text: 'Both check type equality with type coercion.'
        },
      ]
    },

    {
      id: 1,
      question: 'What is adaptive design? ',
      answer: 3,
      selected: 0,
      options: [
        {
          value: 1,
          text: 'Allow to change font-sizes.'
        },
        {
          value: 2,
          text: 'Change colors as you like.'
        },
        {
          value: 3,
          text: 'Delivers specific layouts for different screen sizes.'
        },
      ]
    },

    {
      id: 2,
      question: 'What is jQuery?',
      answer: 2,
      selected: 0,
      options: [
        {
          value: 1,
          text: 'A framework'
        },
        {
          value: 2,
          text: 'A library'
        },
        {
          value: 3,
          text: 'None of these'
        },
      ]
    },

    {
      id: 3,
      question: 'Which HTML5 element defines navigation links?',
      answer: 3,
      selected: 0,
      options: [
        {
          value: 1,
          text: 'links'
        },
        {
          value: 2,
          text: 'navigate'
        },
        {
          value: 3,
          text: 'nav'
        },
      ]
    },

    {
      id: 4,
      question: 'How can you print information to the console?',
      answer: 1,
      selected: 0,
      options: [
        {
          value: 1,
          text: 'console.log(info)'
        },
        {
          value: 2,
          text: 'console(info)'
        },
        {
          value: 3,
          text: 'print(info)'
        },
      ]
    },

    {
      id: 5,
      question: 'What keyword is used to create a JavaScript variable?',
      answer: 1,
      selected: 0,
      options: [
        {
          value: 1,
          text: 'var'
        },
        {
          value: 2,
          text: 'string'
        },
        {
          value: 3,
          text: 'variable'
        },
      ]
    },

    {
      id: 6,
      question: 'Which of the following function of Array object removes the last element from an array and returns that element?',
      answer: 3,
      selected: 0,
      options: [
        {
          value: 1,
          text: 'map()'
        },
        {
          value: 2,
          text: 'push()'
        },
        {
          value: 3,
          text: 'pop()'
        },
      ]
    },

    {
      id: 7,
      question: 'What property is used to change the text color of an element?',
      answer: 2,
      selected: 0,
      options: [
        {
          value: 1,
          text: 'fontcolor'
        },
        {
          value: 2,
          text: 'color'
        },
        {
          value: 3,
          text: 'textColor'
        },
      ]
    },

    {
      id: 8,
      question: 'Inside which HTML element do we put the JavaScript?',
      answer: 2,
      selected: 0,
      options: [
        {
          value: 1,
          text: 'JS'
        },
        {
          value: 2,
          text: 'script'
        },
        {
          value: 3,
          text: 'link'
        },
      ]
    },

    {
      id: 9,
      question: 'What is not an HTML5 element?',
      answer: 1,
      selected: 0,
      options: [
        {
          value: 1,
          text: 'blink'
        },
        {
          value: 2,
          text: 'section'
        },
        {
          value: 3,
          text: 'main'
        },
      ]
    },

    {
      id: 10,
      question: 'Which snippet of CSS is commonly used to center a website horizontally?',
      answer: 2,
      selected: 0,
      options: [
        {
          value: 1,
          text: 'site-align: center;'
        },
        {
          value: 2,
          text: 'margin: 0 auto;'
        },
        {
          value: 3,
          text: 'margin: center;'
        },
      ]
    },

    {
      id: 11,
      question: 'Which is not a JavaScript data type?',
      answer: 3,
      selected: 0,
      options: [
        {
          value: 1,
          text: 'undefined'
        },
        {
          value: 2,
          text: 'boolean'
        },
        {
          value: 3,
          text: 'double'
        },
      ]
    },

    {
      id: 12,
      question: 'Which doctype is correct for HTML5?',
      answer: 1,
      selected: 0,
      options: [
        {
          value: 1,
          text: '!DOCTYPE html'
        },
        {
          value: 2,
          text: '!DOCTYPE'
        },
        {
          value: 3,
          text: '!DOCTYPE HTML5'
        },
      ]
    },

    {
      id: 13,
      question: "How do you call the function 'myFunction'?",
      answer: 2,
      selected: 0,
      options: [
        {
          value: 1,
          text: 'myFunction'
        },
        {
          value: 2,
          text: 'myFunction()'
        },
        {
          value: 3,
          text: 'func myFunction()'
        },
      ]
    },

    {
      id: 14,
      question: "The # symbol specifies that the selector is?",
      answer: 2,
      selected: 0,
      options: [
        {
          value: 1,
          text: 'class'
        },
        {
          value: 2,
          text: 'id'
        },
        {
          value: 3,
          text: 'tag'
        },
      ]
    },
  
  ]
  
  accountantTestQuestionsData: ITestQuestion[] = [
    {
      id: 0,
      question: ' Bütün aktivlәrin әsas fәrqlәndirici cәhәti hansıdır?',
      answer: 1,
      selected: 0,
      options: [
        {
          value: 1,
          text: 'Gәlәcәk iqtisadi fayda.'
        },
        {
          value: 2,
          text: 'Uzun xidmәt müddәt.'
        },
        {
          value: 3,
          text: 'Maddi­әşya forması.'
        },
      ]
    },

    {
      id: 1,
      question: 'Xüsusi kapitalın daha dәqiq tәsvirini secin: ',
      answer: 3,
      selected: 0,
      options: [
        {
          value: 1,
          text: 'Aktivlәr=Kapital'
        },
        {
          value: 2,
          text: 'Xüsusi kapital+Aktivlәr'
        },
        {
          value: 3,
          text: 'Aktivlәr­Öhdәliklәr'
        },
      ]
    },

    {
      id: 2,
      question: 'Xüsusi kapital nәyi әks etdirir?',
      answer: 2,
      selected: 0,
      options: [
        {
          value: 1,
          text: 'Kreditorların iddia etdiyi aktivlәrdә olan payı'
        },
        {
          value: 2,
          text: 'Sәhmdarların iddia etdiyi aktivlәrdә olan payı'
        },
        {
          value: 3,
          text: 'İşçi heyәtinin iddia etdiyi aktivlәrdә olan payı'
        },
      ]
    },

    {
      id: 3,
      question: 'İnformasiya aşağıdakılardan birinin tәmin olunması üçün әhәmiyyәtli dәrәcәdә sәhv olmamalı vә yanıltmamalıdır: ',
      answer: 3,
      selected: 0,
      options: [
        {
          value: 1,
          text: 'Müqayisәlilik'
        },
        {
          value: 2,
          text: 'Ardıcıllıq'
        },
        {
          value: 3,
          text: 'Etibarlıq'
        },
      ]
    },

    {
      id: 4,
      question: 'Amortizasiya prosesi aşağıdakı kimi tәqdim oluna bilәr',
      answer: 1,
      selected: 0,
      options: [
        {
          value: 1,
          text: 'Sәmәrәli vә sistemli yanaşma әsasında aktivin faydalı istifadә müddәti әrzindә onun dәyәrinin xәrclәrә silinmәsi'
        },
        {
          value: 2,
          text: 'Aktivin әdalәtli dәyәr üzrә qiymәtlәndirilmәsi'
        },
        {
          value: 3,
          text: 'Hәr hesabat dövrü әrzindә aktivin dәyәrinin onun real dәyәrinә qәdәr silinmәsi'
        },
      ]
    },

    {
      id: 5,
      question: 'MMUS­a uyğun olaraq maliyyә hesabatında әhәmiyyәtli sәhvlәr hesab olunur:',
      answer: 1,
      selected: 0,
      options: [
        {
          value: 1,
          text: 'hәmin hesabat әrzindә qәbul edilәn iqtisadi qәrarlara tәsir göstәrir'
        },
        {
          value: 2,
          text: 'maliyyә informasiyalarını әhәmiyyәtli dәrәcәdә saxtalaşdırır'
        },
        {
          value: 3,
          text: 'maliyyә hesabatının düzgün şәrh olunmamasına gәtirib çıxarır'
        },
      ]
    },

    {
      id: 6,
      question: '“Yığılmış amortizasiya” hesabının qalığı nәyi әks etdirir? ',
      answer: 3,
      selected: 0,
      options: [
        {
          value: 1,
          text: 'Cari dövrün xәrclәrinә aid edilәn mәblәğı'
        },
        {
          value: 2,
          text: 'Әdalәtli dәyәrin әldә olunması üçün әsas vәsaitlәrin dәyәrindәn çıxılan mәblәği'
        },
        {
          value: 3,
          text: 'Әsas vәsait obyektlәrinin әldә olunması tarixindәn sonrakı xәrclәrә aid olan mәblәğ'
        },
      ]
    },

    {
      id: 7,
      question: 'Amortizasiya faydalı istifadә müddәti әrzindә әsas vәsaitlәrin dәyәrinin hansı üsulla silinmәsi prosesidir?',
      answer: 2,
      selected: 0,
      options: [
        {
          value: 1,
          text: 'Bәrabәr vә obyektiv üsulla'
        },
        {
          value: 2,
          text: 'Sistematik vә sәmәrәli әsasla'
        },
        {
          value: 3,
          text: 'Konservativ bazar yanaşması әsasında'
        },
      ]
    },

    {
      id: 8,
      question: 'Balansın hansı elementi әsas element hesab edilir?',
      answer: 2,
      selected: 0,
      options: [
        {
          value: 1,
          text: 'Mühasibat uçotunun hesabları'
        },
        {
          value: 2,
          text: 'Balansın maddәlәr'
        },
        {
          value: 3,
          text: 'Balansın valyutası'
        },
      ]
    },

    {
      id: 9,
      question: '“Tәşkilatın işçi heyәtinә kassadan әmәk haqqı verilmişdir” tәsәrrüfat әmәliyyatı balansın hansı dәyişmә növünә aiddir?',
      answer: 1,
      selected: 0,
      options: [
        {
          value: 1,
          text: 'aktiv vә passivin tәrkibinә azalma yaranır'
        },
        {
          value: 2,
          text: 'aktiv vә passivdә artım yaranır'
        },
        {
          value: 3,
          text: 'düzgün cavab yoxdur'
        },
      ]
    },

    {
      id: 10,
      question: 'Kommersiya tәşkilatlarının maliyyә vәziyyәtini hansl tәnlik xarakterizә edir?',
      answer: 2,
      selected: 0,
      options: [
        {
          value: 1,
          text: 'A=K+Ö+G'
        },
        {
          value: 2,
          text: 'A=K+Ö'
        },
        {
          value: 3,
          text: 'A=K+Ö+G-­R'
        },
      ]
    },

    {
      id: 11,
      question: 'Әmәyin ödәnilmәsinin әsas formaları hansılardır?',
      answer: 3,
      selected: 0,
      options: [
        {
          value: 1,
          text: 'Әsas vә vaxtamuz'
        },
        {
          value: 2,
          text: 'Әsas vә әlavә'
        },
        {
          value: 3,
          text: 'Vaxtamuzd vә işәmuzd'
        },
      ]
    },

    {
      id: 12,
      question: 'Mәnfәәt vә zәrәr haqqında hesabatda “Satışın maya dәyәri” maddәsindә aşağıdakı xәrclәr әks olunmalıdır.',
      answer: 1,
      selected: 0,
      options: [
        {
          value: 1,
          text: 'birbaşa material xәrclәri; birbaşa әmәk haqqı xәrclәri; dolayı (üstәlik) istehsal xәrclәri'
        },
        {
          value: 2,
          text: 'dolayı (üstәlik) istehsal xәrclәri'
        },
        {
          value: 3,
          text: 'kommersiya xәrclәri'
        },
      ]
    },

    {
      id: 13,
      question: "Hansı hallarda xidmәtlәrin göstәrilmәsindәn әldә olunan gәlir tanınır",
      answer: 2,
      selected: 0,
      options: [
        {
          value: 1,
          text: 'müqavilәnin bağlanma anında'
        },
        {
          value: 2,
          text: 'әmәliyyatın hesabat tarixinә olan yekunlaşma sәviyyәsindәn asılı olaraq'
        },
        {
          value: 3,
          text: 'heç bir cavab düz deyil;'
        },
      ]
    },

    {
      id: 14,
      question: "Aşağıdakılardan hansı nağdsız hesablaşmalara aiddir?",
      answer: 2,
      selected: 0,
      options: [
        {
          value: 1,
          text: 'Çeklәr'
        },
        {
          value: 2,
          text: 'Çeklәr, inkasso üzrә, ödәniş tәlәbnamәsi ilә'
        },
        {
          value: 3,
          text: 'İnkasso üzrә'
        },
      ]
    },

  ]

  vacanciesQuestion: IVacanciesAllQuestions[] = [
    {
      vacancyId: 1,
      data: this.frontTestQuestionsData
    },
    {
      vacancyId: 2,
      data: this.accountantTestQuestionsData
    },
  ]

}
