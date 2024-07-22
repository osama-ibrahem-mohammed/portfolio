import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FootprovService } from './footprov.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
constructor(public footserv:FootprovService)
{
  
}
}
