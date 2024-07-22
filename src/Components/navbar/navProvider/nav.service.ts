import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavService {
  data:any[] = [
    {id: 1, link: '#header', title: 'Home'},
    {id: 2, link: '#about', title: 'About'},
    {id: 2, link: '#skill', title: 'Skills'},
    {id: 3, link: '#services', title: 'Services'},
    {id: 4, link: '#portfolio', title: 'Portfolio'},
    {id: 5, link: '#contact', title: 'Contact'}
  ]
  constructor() { }
}
