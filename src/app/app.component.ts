import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  menuOpened = false;

  listTitles = [{
    trailer:'/assets/videos/trailer_guardioes_da_galaxia_1080p.mp4',
    cover: '/assets/images/guardios-da-galaxia.jpg',
    name: 'Guardiões da Galaxia 1',
    relevance: 87,
    parts: 2,
    age: 0,
    categorias: ['Épico', 'Filme de fantasia', 'Viagem no espaço']

  },
  {
    trailer:'/assets/videos/trailer_guardioes_da_galaxia_1080p.mp4',
    cover: '/assets/images/guardios-da-galaxia.jpg',
    name: 'Guardiões da Galaxia 2',
    relevance: 74,
    parts: 2,
    age: 12,
    categorias: ['Épico', 'Filme de fantasia', 'Viagem no espaço']

  },
  {
    trailer:'/assets/videos/trailer_guardioes_da_galaxia_1080p.mp4',
    cover: '/assets/images/guardios-da-galaxia.jpg',
    name: 'Guardiões da Galaxia 3',
    relevance: 69,
    parts: 2,
    age: 14,
    categorias: ['Épico', 'Filme de fantasia', 'Viagem no espaço']

  },
  {
    trailer:'/assets/videos/trailer_guardioes_da_galaxia_1080p.mp4',
    cover: '/assets/images/guardios-da-galaxia.jpg',
    name: 'Guardiões da Galaxia 4',
    relevance: 98,
    parts: 2,
    age: 16,
    categorias:['Épico', 'Filme de fantasia', 'Viagem no espaço']

  }
];
setMenuState(state: boolean){

  this.menuOpened = state;

}

closeMenu() {
  this.menuOpened = false;

}

}


