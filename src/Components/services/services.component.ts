import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServprovService } from './serviceprovider/service-provider/servprov.service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  constructor(public Data:ServprovService){
    
  }

}
