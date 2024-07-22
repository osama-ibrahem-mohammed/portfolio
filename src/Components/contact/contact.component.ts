import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ContprovService } from './contactProvidrr/contprov.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterLink,RouterOutlet,CommonModule,FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
constructor(public con : ContprovService)
{}
}
