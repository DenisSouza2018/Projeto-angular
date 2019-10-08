import { Http } from '@angular/http'
import { Oferta } from './shared/oferta.model'
import { Injectable } from '@angular/core'
import { URL_API } from './app.api'
import { Observable } from 'rxjs'

import 'rxjs/add/operator/toPromise'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/retry'


@Injectable()
export class OfertasService {

    private url_api = 'http://localhost:3000'

    constructor(private http: Http){ }

    
    
    public getOfertas(): Promise<Oferta[]> {
        // Executar uma requição http
        // Retornar um promise Pferta[]
        return this.http.get(`${URL_API}/ofertas?destaque=true`)
            .toPromise()
            .then((resposta: any) => resposta.json())

       
    }

    public getOfertasPorCategoria(categoria: string) :Promise<Oferta[]>{
        return this.http.get(`${this.url_api}/ofertas?categoria=${categoria}`)
        .toPromise()
        .then((resposta: any) => resposta.json())
    }


    public getOfertasPorDiversao(diversao: string) :Promise<Oferta[]>{
        return this.http.get(`${this.url_api}/ofertas?categoria=${diversao}`)
        .toPromise()
        .then((resposta: any) => resposta.json())
    }

    public getOfertasPorId(id: number): Promise<Oferta>{
        return this.http.get(`${this.url_api}/ofertas?id=${id}`)
        .toPromise()
        .then((resposta: any)=>{
            
            return resposta.json()[0]
            
        })
    }

    public getComoUsarOfertaPorId(id: number): Promise<string> {
        return this.http.get(`${URL_API}/como-usar?id=${id}`)
            .toPromise()
            .then((resposta: any) =>{

                return resposta.json()[0].descricao
            })
    }

    public getOndeFicaOfertaPorId(id: number): Promise<string> {
        return this.http.get(`${URL_API}/onde-fica?id=${id}`)
            .toPromise()
            .then((resposta: any) =>{
                
                return resposta.json()[0].descricao
            })
    }

    public pesquisaOfertas(termo: string): Observable<Oferta[]>{
        return this.http.get(`${this.url_api}/ofertas?descricao_oferta_like=${termo}`)
        .retry(10)    
        .map((resposta: any)=> resposta.json())
    }
}