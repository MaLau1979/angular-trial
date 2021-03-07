import { Component } from '@angular/core';
import { BrowserTransferStateModule } from '@angular/platform-browser';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitan Amércia'];
heroeBorrado: string = '';

borrarHeroe(){
  this.heroeBorrado= this.heroes.shift() || '';
  
}

}
