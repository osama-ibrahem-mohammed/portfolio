import { Component, EventEmitter, Input, Output, input } from '@angular/core';

@Component({
  selector: 'app-category-button',
  standalone: true,
  imports: [],
  templateUrl: './category-button.component.html',
  styleUrl: './category-button.component.css'
})
export class CategoryButtonComponent {
  constructor()
  {
    
  }
  @Input() classy!:any
@Input()category!:any
@Output() selectedcategory:EventEmitter<any> = new EventEmitter();

  onChangeCategory(category:any){
    this.selectedcategory.emit(category)
  }
}
