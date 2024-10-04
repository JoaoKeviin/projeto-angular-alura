import { UnidadeFederativaService } from './../../../core/services/unidade-federativa.service';
import { Component, Input, OnInit } from '@angular/core';
import { estados } from 'src/app/core/types/types';

@Component({
  selector: 'app-dropdown-ul',
  templateUrl: './dropdown-ul.component.html',
  styleUrls: ['./dropdown-ul.component.scss']
})
export class DropdownUlComponent implements OnInit {

  @Input() label: string = '';
  @Input() matPrefix: string = '';
  UnidadeFederativas: estados[] = [];

  filteredOptions = []

  constructor(private UnidadeFederativaService: UnidadeFederativaService) {

  } 

  ngOnInit(): void {
    this.UnidadeFederativaService.list().subscribe(
      dados => {
          this.UnidadeFederativas = dados
          console.log(dados)
      }
    )
  }
  
  

}
