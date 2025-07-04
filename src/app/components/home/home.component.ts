import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { BenefitsComponent } from '../benefits/benefits.component';
import { FlatsComponent } from '../flats/flats.component';
import { CtaComponent } from '../cta/cta.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, BenefitsComponent, FlatsComponent, CtaComponent, FooterComponent, HeaderComponent],
  templateUrl: './home.component.html'
})
export class HomeComponent {}
