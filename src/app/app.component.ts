import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  photos = [
    {
    url: 'https://thumbs.dreamstime.com/b/leao-beach-fernando-de-noronha-island-lion-bay-waters-atlantic-ocean-archipelag-pernambuco-brazil-45395949.jpg',
    description: 'Imagem 1'
    },
    {
    url: 'https://thumbs.dreamstime.com/b/beautiful-view-praia-de-leao-lion-beach-fernando-de-noronha-brazil-state-pernambuco-brazil-view-praia-de-leao-145792800.jpg',
    description: 'Imagem 2'
    }
    ];
 }
