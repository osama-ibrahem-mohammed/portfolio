import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../Components/navbar/navbar.component';
import { AboutComponent } from '../Components/about/about.component';
import { HeaderComponent } from '../Components/header/header.component';
import { FooterComponent } from '../Components/footer/footer.component';
import { PortfolioComponent } from '../Components/portfolio/portfolio.component';
import { ServicesComponent } from '../Components/services/services.component';
import { ContactComponent } from '../Components/contact/contact.component';
import { SkillsComponent } from '../Components/my skills/skills/skills.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,NavbarComponent,SkillsComponent,AboutComponent,HeaderComponent,FooterComponent,PortfolioComponent,ServicesComponent,ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}
