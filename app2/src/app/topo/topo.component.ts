import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.services';
import { Observable, Subject } from 'rxjs';
import { Oferta } from '../shared/oferta.model';

import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/debounceTime'
import 'rxjs/add/observable/of'

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers:[OfertasService]
})
export class TopoComponent implements OnInit {

  public ofertas: Observable<Oferta[]>
  public ofertas2: Oferta[]
  private subjectPesquisa: Subject<string> = new Subject<string>()

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
    this.ofertas = this.subjectPesquisa //retorno Oferta[]
    .debounceTime(1000) // executa a ação após um segundo
      .distinctUntilChanged() //para fazer pesquisa distintas
      .switchMap((termo: string)=>{
        console.log('requisicao http para api: ')
        
        if(termo.trim()=== ''){
          //retornar um observable de array de ofertas vazio
          return Observable.of<Oferta[]>([])
        }

        return this.ofertasService.pesquisaOfertas(termo)
      })
      .catch((err: any)=>{
        console.log(err)
        return Observable.of<Oferta[]>([])
      })
      this.ofertas.subscribe((ofertas: Oferta[])=>{ 

      this.ofertas2 = ofertas
    
    })
  }

  public pesquisa(termoDaBusca: string):void{
    console.log('Keyup caracter ', termoDaBusca)
    this.subjectPesquisa.next(termoDaBusca)

    

  }

  public limpaPesquisa(): void{
    this.subjectPesquisa.next('')
  }

}
