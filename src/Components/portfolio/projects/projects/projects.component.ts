import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProjectComponent } from '../../project/project/project.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule,FormsModule,ProjectComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
@Input() prj!:any[]

}
