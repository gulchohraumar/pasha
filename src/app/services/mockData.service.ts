import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {
  vacancies = [
    {
      id: 1,
      name: 'Front-end developer',
      beginDate: formatDate(new Date(), 'yyyy-MM-dd', 'en'),
      endDate: '2024-10-18',
      location: 'Bakı',
      salary: '1500-1700',
      email: "test@gmail.com",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab molestiae, officiis, consequuntur   beatae praesentium. Lorem ipsum dolor, sit amet consectetur adipisicing elit.Quis ipsum exercitationem nesciunt, modi quod fugit dolor corrupti rerum provident enim!",
    }, 
    {
      id: 2,
      name: 'Baş mühasib',
      beginDate: formatDate(new Date(), 'yyyy-MM-dd', 'en'),
      endDate: '2024-10-22',
      location: 'Sumqayıt',
      salary: 'Razılaşma ilə',
      email: "test1@gmail.com",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    },

  ]
}
