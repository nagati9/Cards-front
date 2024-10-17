import { Component, input, Input, InputSignal } from '@angular/core';
import { Monstre } from '../../Models/Monstre';

@Component({
  selector: 'app-carte',
  standalone: true,
  imports: [CarteComponent],
  templateUrl: './carte.component.html',
  styleUrl: './carte.component.css'
})
export class CarteComponent {

  monstre: InputSignal<Monstre> = input(new Monstre());





  public setBackgroundColor(color: number): void {
    // Récupère l'élément avec l'id "inside"
    const element = document.getElementById("inside");

    if (element) {
      // Définit la couleur de fond en fonction de la valeur de `color`
      switch (color) {
        case 1:
          element.style.backgroundColor = "green";
          break;
        case 2:
          element.style.backgroundColor = "red";
          break;
        case 3:
          element.style.backgroundColor = "yellow";
          break;
        case 4:
          element.style.backgroundColor = "blue";
          break;
        default:
          console.error("Couleur non reconnue");
      }
    } else {
      console.error("Élément avec l'ID 'inside' introuvable.");
    }
  }





}
