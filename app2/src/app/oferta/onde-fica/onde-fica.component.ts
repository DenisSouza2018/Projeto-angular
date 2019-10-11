import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OfertasService } from 'src/app/ofertas.services';



@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css'],
  providers: [OfertasService]
})
export class OndeFicaComponent implements OnInit {

  public descOndefica: String = ''

  constructor(
    private router:ActivatedRoute,
    private ondeFica: OfertasService) { }

  ngOnInit() {

    this.router.parent.params.subscribe((parametro: Params)=>{
      this.ondeFica.getOndeFicaOfertaPorId(parametro.id)
    .then((descricao: string)=>{
      this.descOndefica = descricao

    })

    })

   
  }

}
