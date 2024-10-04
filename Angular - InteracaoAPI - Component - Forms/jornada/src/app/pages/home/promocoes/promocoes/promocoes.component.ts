// src/app/pages/home/promocoes/promocoes.component.ts
import { Component, OnInit } from '@angular/core';
import { PromocaoService } from 'src/app/core/services/promocao.service';
import { promocao } from 'src/app/core/types/types';

@Component({
  selector: 'app-promocoes',
  templateUrl: './promocoes.component.html',
  styleUrls: ['./promocoes.component.scss']
})
export class PromocoesComponent implements OnInit {
  promocoes!: promocao[];


  constructor(private service: PromocaoService) {

  }


  ngOnInit(): void {
    this.service.list()
    .subscribe(
      res => {
        this.promocoes = res;
        console.log(res)
      }
    )
  }
}