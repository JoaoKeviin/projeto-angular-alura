
import { Component, Input } from '@angular/core';
import { promocao } from 'src/app/core/types/types';



@Component({
  selector: 'app-card-busca',
  templateUrl: './card-busca.component.html',
  styleUrls: ['./card-busca.component.scss']
})
export class CardBuscaComponent {
  
  @Input() promocoes!: promocao;
}