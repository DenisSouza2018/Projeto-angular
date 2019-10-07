import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from 'src/app/ofertas.services';



@Component({
  selector: 'app-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.css'],
  providers: [OfertasService]
})
export class ComoUsarComponent implements OnInit {

  public comoUsar: String = ''

  constructor(
    private router: ActivatedRoute, 
    private ofertasService: OfertasService
  ) { }

  ngOnInit() {
    
    this.ofertasService.getComoUsarOfertaPorId(this.router.parent.snapshot.params['id'])
      .then((descricao: string)=>{
        this.comoUsar = descricao;
        
      })
  }

}
