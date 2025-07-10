import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { FlatsComponent } from './flats/flats.component';
import { CtaComponent } from './cta/cta.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    BenefitsComponent,
    FlatsComponent,
    CtaComponent,
    HeaderComponent,
    FooterComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {}
