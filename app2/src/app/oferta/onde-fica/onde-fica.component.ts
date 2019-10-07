import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

   this.ondeFica.getOndeFicaOfertaPorId(this.router.parent.snapshot.params['id'])
    .then((descricao: string)=>{
      this.descOndefica = descricao

    })
  }

}
