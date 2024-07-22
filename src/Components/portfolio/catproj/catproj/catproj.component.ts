import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CategoryButtonComponent } from '../../catbutton/category-button/category-button.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-catproj',
  standalone: true,
  imports: [CategoryButtonComponent,FormsModule,CommonModule],
  templateUrl: './catproj.component.html',
  styleUrl: './catproj.component.css'
})

export class CatprojComponent {
  constructor()
  {
 

  }
@Input() categ:any[]=[]
@Output() selectedcategory2:EventEmitter<any> = new EventEmitter();

change(event:any)
{
  this.selectedcategory2.emit(event)
}

}
