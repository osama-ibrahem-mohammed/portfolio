import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContprovService {
   data = [
    {id: 1, icon: '<i class="fa-solid fa-envelope"></i>', link: 'https://mail.google.com/mail/?view=cm&fs=1&to=asamtabrahym870@gmail.com'},
    {id: 2, icon: '<i class="fa-brands fa-facebook-messenger"></i>', link: 'https://www.messenger.com/t/100010266661717'},
    {id: 3, icon: '<i class="fa-brands fa-whatsapp"></i>', link: 'https://wa.me/+201110173497'}
];

  constructor() { }
}
