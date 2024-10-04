import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { promocao } from '../types/types';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

// no injectable eu posso injetar ele nas minhas classes do angular 
// ele esta provido no root, isso quer dizer que para toda a nossa aplicacao, somente vai haver uma instancia desser servico
// nome de padrao desse projeto se chama Singleton
export class PromocaoService {

private apiUrl: string = environment.apiUrl
//aqui estou importando a url que esta na inveroment
// nunca usar .developer

  // no construtor eu posso injetar o HTTPClient
  constructor(
    private httpClient: HttpClient

    ) { }

   //esse metodo vai listar as promocoes disponiveis 
   // o <promocao> é direto da interface, mas no caso
   //coloquei uma lista pois vai ser uma lista de promo
    // antes de tudo tenho que config o ambiente
    //atraves do ng generate src environments
    list() : Observable<promocao[]>{
    return  this.httpClient.get<promocao[]>(`${this.apiUrl}/promocoes`)
    }


}
