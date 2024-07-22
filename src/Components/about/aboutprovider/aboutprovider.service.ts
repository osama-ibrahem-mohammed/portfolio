import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AboutproviderService {
  data:any[] = [
    {id: 1, icon: '<i class="fa-solid fa-hourglass-start"></i>', title: 'Experience', desc: '1+ Years Working'},
    {id: 2, icon: '<i class="fa-solid fa-business-time"></i>', title: 'Projects', desc: '3+ Completed'},
    {id: 3, icon: '<i class="fa-solid fa-people-group"></i>', title: 'Clients', desc: '1+ happy clients'}
    ]
  constructor() { }
}

