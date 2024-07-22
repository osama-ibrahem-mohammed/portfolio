import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SkillProvService } from '../skill-prov.service';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [FormsModule,CommonModule,MatExpansionModule,
    MatButtonModule,],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skills:any=[]
  constructor(private skillprov:SkillProvService){
   this.skills=this.skillprov.skills
  }

}
