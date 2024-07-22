import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AboutproviderService } from './aboutprovider/aboutprovider.service';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink,RouterOutlet,CommonModule,FormsModule,MatCardModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  CV: string = 'assets/_Osama-ibrahem .Net developer.pdf';
constructor(public aboutService: AboutproviderService){

}
}
