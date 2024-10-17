import { Component } from '@angular/core';
import { CarteComponent } from "./components/carte/carte.component";
import { HttpClientModule } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { Monstre } from './Models/Monstre';
import { MonstresService } from './monstres.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: 'app.componenet.css',
  imports: [CarteComponent, HttpClientModule, CommonModule], // Ajoutez HttpClientModule ici
  providers: [MonstresService]

})
export class AppComponent implements OnInit {
  title = 'app';
  monstres: Monstre[] = []; // Initialisez monstres comme un tableau de Monstre
  constructor(private monstresService: MonstresService) {

  }

  ngOnInit(): any {
    console.log("on init...");
    // this.monstresService.getMonstres().subscribe((datas: Monstre[]) => {
    //   this.monstre = datas;
    // });
    this.monstresService.getMonstres().subscribe((datas) => {
      this.monstres = datas
    })

  }
}
