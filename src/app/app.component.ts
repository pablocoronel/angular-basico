import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Angular";
  numeros: number[] = [1, 2, 3, 4, 5];

  nombres: string[] = [
    "diego",
    "pablo",
    "miguel",
    "alejandro",
    "roxana",
    "alison",
    "lucas",
    "david"
  ];

  isActive: boolean = false;

  // funcion
  public esPar(numero: number): boolean {
    return numero % 2 == 0 ? true : false;
  }

  public sumarNumero(): void {
    this.numeros.push(this.numeros[this.numeros.length - 1] + 1);
  }

  public toggle() {
    this.isActive = !this.isActive;
  }
}
