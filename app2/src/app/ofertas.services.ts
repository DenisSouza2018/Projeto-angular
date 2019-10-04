import { Http } from '@angular/http'
import { Oferta } from './shared/oferta.model'
import { Injectable } from '@angular/core'



@Injectable()
export class OfertasService {

    constructor(private http: Http){ }

   

    public getOfertas(): Promise<Oferta[]> {
        // Executar uma requição http
        // Retornar um promise Pferta[]
        return this.http.get('http://localhost:3000/ofertas?destaque=true')
            .toPromise()
            .then((resposta: any) => resposta.json())

    
    }

    public getOfertasPorCategoria(categoria: string) :Promise<Oferta[]>{
        return this.http.get(`http://localhost:3000/ofertas?categoria=${categoria}`)
        .toPromise()
        .then((resposta: any) => resposta.json())
    }


    public getOfertasPorDiversao(diversao: string) :Promise<Oferta[]>{
        return this.http.get(`http://localhost:3000/ofertas?categoria=${diversao}`)
        .toPromise()
        .then((resposta: any) => resposta.json())
    }


}