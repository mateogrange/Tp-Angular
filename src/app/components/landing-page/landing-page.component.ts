import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  imports: [],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
  private router = inject(Router);
  imageUrl: string = 'https://imgs.search.brave.com/nUV58FtS7pVf5w29F1yr0D1cJE5qV7eR5qf93oOR7dE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ncmFw/aGlzdGUuY29tL2Js/b2cvd3AtY29udGVu/dC91cGxvYWRzL3Np/dGVzLzQvMjAxOS8w/OC8xOTIwcHgtTkFT/QV9sb2dvLnN2Zy1l/MTU2NzE2MDM0NzI2/My5wbmc'

  onContinue(): void{
    this.router.navigateByUrl("websnaps");
  }
}
