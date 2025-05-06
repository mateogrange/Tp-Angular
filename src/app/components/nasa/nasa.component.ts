import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NasaService } from '@/services/api/nasa.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-nasa',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nasa.component.html',
  styleUrl: './nasa.component.css'
})

export class NasaComponent implements OnInit {
  //nasas: any[] = [];
  nasa: any

  constructor(
    private nasaService: NasaService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.nasaService.getNasa().subscribe(response => {
      console.log("API Response:", response);
      //this.nasas = response.results;
      this.nasa = response;
      this.cdr.detectChanges();
    });
  }
}
