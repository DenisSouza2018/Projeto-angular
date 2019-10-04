import { Http } from '@angular/http'
import { Oferta } from './shared/oferta.model'
import { Injectable } from '@angular/core'
import { URL_API } from './app.api'



@Injectable()
export class OfertasService {

    private url_api = 'http://localhost:3000/ofertas'

    constructor(private http: Http){ }

    
    
    public getOfertas(): Promise<Oferta[]> {
        // Executar uma requição http
        // Retornar um promise Pferta[]
        return this.http.get(`${URL_API}?destaque=true`)
            .toPromise()
            .then((resposta: any) => resposta.json())

       
    }

    public getOfertasPorCategoria(categoria: string) :Promise<Oferta[]>{
        return this.http.get(`${this.url_api}?categoria=${categoria}`)
        .toPromise()
        .then((resposta: any) => resposta.json())
    }


    public getOfertasPorDiversao(diversao: string) :Promise<Oferta[]>{
        return this.http.get(`${this.url_api}?categoria=${diversao}`)
        .toPromise()
        .then((resposta: any) => resposta.json())
    }

    public getOfertasPorId(id: number): Promise<Oferta>{
        return this.http.get(`${this.url_api}?id=${id}`)
        .toPromise()
        .then((resposta: any)=>{
            
            return resposta.json()[0]
            
        })
    }

}