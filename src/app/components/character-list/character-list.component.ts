import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RickAndMortyService } from '@/services/api/rick-morty.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {
  characters: any[] = [];

  constructor(
    private rickAndMortyService: RickAndMortyService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.rickAndMortyService.getCharacters().subscribe(response => {
      console.log("API Response:", response);
      this.characters = response.results;
      this.cdr.detectChanges();
    });
  }
}
