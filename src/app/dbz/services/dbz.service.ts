//en los servicios se coloca la data para que sea la misma en todos los componentes. Es una clase abstracta donde se coloca la información y los métodos para manipular esa información

import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";



@Injectable()
export class DbzService {

  private _personajes: Personaje[]=[
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegeta',
      poder: 7500
    }
  ]

  get personajes(){
    return [...this._personajes]; //spread operator
  }

  constructor(){
    
  }

  agregarPersonaje(personaje:Personaje){
    this._personajes.push( personaje )
  }

}