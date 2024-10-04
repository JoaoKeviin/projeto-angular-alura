import { Component, OnInit } from '@angular/core';
import { PromocaoService } from 'src/app/core/services/promocao.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  
  constructor( private servicePromotion: PromocaoService ){

  }


  ngOnInit(): void {
    this.servicePromotion.list()
    .subscribe(
      response => {
        console.log(response)
      }
    )
  }
  //se nao configurar app model ele nao vai, colocando o model dele o HttpClient
}
