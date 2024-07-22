import { Routes } from '@angular/router';
import { NavbarComponent } from '../Components/navbar/navbar.component';
import { HeaderComponent } from '../Components/header/header.component';
import { FloatingNavComponent } from '../Components/floating-nav/floating-nav.component';
import { AboutComponent } from '../Components/about/about.component';
import { ServicesComponent } from '../Components/services/services.component';
import { FAQsComponent } from '../Components/faqs/faqs.component';
import { FooterComponent } from '../Components/footer/footer.component';
import { PortfolioComponent } from '../Components/portfolio/portfolio.component';
import { TestimonialsComponent } from '../Components/testimonials/testimonials.component';
import { ContactComponent } from '../Components/contact/contact.component';
import { SkillsComponent } from '../Components/my skills/skills/skills.component';

export const routes: Routes = [

   { path: 'Navbar', component:NavbarComponent  },
   { path: 'Header', component:HeaderComponent  },
   { path: 'FloatingNav', component:FloatingNavComponent  },
   { path: 'about', component:AboutComponent  },
   { path: 'Services', component:ServicesComponent  },
   { path: 'FAQs', component:FAQsComponent  },
   { path: 'Footer', component:FooterComponent  },
   { path: 'Portfolio', component:PortfolioComponent  },
   { path: 'Testimonials', component:TestimonialsComponent  },
   { path: 'Contact', component:ContactComponent  },
   { path: 'Skills', component:SkillsComponent  },




];
