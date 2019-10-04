import { Component, OnInit } from '@angular/core';
import { Oferta } from '../shared/oferta.model';
import { OfertasService } from '../ofertas.services';

@Component({
  selector: 'app-diversao',
  templateUrl: './diversao.component.html',
  styleUrls: ['./diversao.component.css'],
  providers: [OfertasService]
})
export class DiversaoComponent implements OnInit {

  public ofertas2: Oferta[]

  constructor(private ofertasService2: OfertasService) { }

  ngOnInit() {

    this.ofertasService2.getOfertasPorDiversao('diversao')
      .then((ofertas1:Oferta[])=>{
        this.ofertas2 = ofertas1
        console.log(ofertas1);
      })

  }

}
