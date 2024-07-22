import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeadService {
   data:any[] = [
    {id: 1, link: 'https://www.linkedin.com/in/osama-ibrahem-27b2622b2/', icon: '<i class="fa-brands fa-linkedin"></i>'},
    {id: 2, link: 'https://github.com/osama-ibrahem-mohammed', icon: '<i class="fa-brands fa-github"></i>'},
    {id: 3, link: 'https://www.facebook.com/profile.php?id=100010266661717', icon: '<i class="fa-brands fa-facebook"></i>'},
    
]

  constructor() { }
}
