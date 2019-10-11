import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OfertasService } from '../ofertas.services';
import { Oferta } from '../shared/oferta.model';

import 'rxjs/Rx'


@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers:[OfertasService]
})
export class OfertaComponent implements OnInit, OnDestroy {



  public oferta: Oferta

  constructor(
    private route: ActivatedRoute,
    private ofertasService: OfertasService) { }

  ngOnInit() {

    this.route.params.subscribe((parametros: Params)=>{
      
      this.ofertasService.getOfertasPorId( parametros.id)
      .then((oferta: Oferta)=>{
        
        this.oferta = oferta
       // console.log(this.oferta)
        
      })
      
     
    })

    

      /*
      this.route.params.subscribe((parametro:any)=>{console.log(parametro)},
      (erro: any)=> console.log(erro),
      ()=> console.log('Processamento foi classificado com concluido !')      
      )
      */

      /*
      let tempo = Observable.interval(2000)
      this.tempoObservableSubscription = tempo.subscribe((intervalo: number)=>[
        console.log(intervalo)
      ])
      

      let meuObervableTeste = Observable.create((observer:Observer<number>)=>{
        observer.next(1)
        observer.complete()
      })

      // observable(observador)
     this.meuObervableTesteSubscription = meuObervableTeste.subscribe(
        (resultado: number)=> console.log(resultado+10),
        (erro: string)=> console.log(erro),
        ()=> console.log('Finalizado')
      )*/
  }
  
  ngOnDestroy(){
  }

}
