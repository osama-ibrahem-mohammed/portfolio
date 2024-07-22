import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ProjectComponent } from './project/project/project.component';
import { CatprojComponent } from './catproj/catproj/catproj.component';
import { ProjectsComponent } from './projects/projects/projects.component';
import { PortservService } from './portfolioProvider/portserv.service';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [RouterLink,RouterOutlet,ProjectComponent,CatprojComponent,ProjectsComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
categories:any[]=[]
filteredData:any[]=[]
  constructor(public Data:PortservService)
  {
   this.categories= ['all',...new Set(Data.data.map(item => item.category))];
   this.filteredData=this.Data.data

  }
  filter(category:any)
  {
    if(category=='all' )
    {
      this.filteredData=this.Data.data
    }
    else
    {
      this.filteredData=this.Data.data.filter(item =>item.category==category)
    }
  }
  change(event:any)
  {
    this.filter(event)
    console.log(event)
  }
}
