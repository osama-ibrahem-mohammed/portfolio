import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServprovService {
  data = [
    // {
    //     id: 1, icon: '', title: 'UI/UX Design', desc: "My designs are modern and intuitive. I use industry-standard rules to make sure your users have fun using your product."
    // },
    {
        id: 2, icon: '', title: 'Frontend Development', desc: "Your product will look good and will be accessible on all devices, including mobile phones, tablets, and desktop."
    },
    {
        id: 3, icon: '', title: 'Backend Development', desc: "The security of your business/product is taken seriously right from the start of the project. I will make sure your website/app is secure from attacks."
    },
    // {
    //     id: 4, icon: '', title: 'App Development', desc: 'Unlike other developers in the market, I will build an app that runs on both IOS and Android devices without any extra cost to you.'
    // }
]
  constructor() { }
}
