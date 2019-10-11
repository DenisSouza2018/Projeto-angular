import { Component, OnInit } from '@angular/core';
import { OrdemCompraService } from '../util/ordem-compra.service';
import { Pedido } from '../shared/pedido.model';



@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers:[OrdemCompraService]
})
export class OrdemCompraComponent implements OnInit {

  constructor(private ordemCompraService: OrdemCompraService) { }

  // Pedido
  public pedido: Pedido = new Pedido('','','','')

  public endereco: string = '';
  public numero: string ='';
  public complemento: string ='';
  public formaPagamento: string ='';

  // atributos para a validação do front
  public enderecoValido: boolean;
  public numeroValido: boolean;
  public complementoValido: boolean;
  public formaPagamentoValido: boolean;

  // estados primitivos dos campos
  public enderecoEstadoPrimitivo: boolean = true;
  public numeroEstadoPrimitivo: boolean = true;
  public complementoEstadoPrimitivo: boolean = true;
  public formaPagamentoEstadoPrimitivo: boolean = true;

  // controlar botão confirma compra
  public formEstado: string = 'disabled'

  ngOnInit() {
    //this.ordemCompraService.efetivarCompra()
  }

  public atualizaEndereco(endereco: string):void{
    this.endereco = endereco;

    this.enderecoEstadoPrimitivo = false;

    // se a string for maior que 3
    if(this.endereco.length > 3){
      this.enderecoValido = true;
    }else{
      this.enderecoValido = false;
    }

   this.habilitaForm()
  }

  public atualizaNumero(numero : string):void{
    this.numero = numero

    this.numeroEstadoPrimitivo = false;

    if(this.numero.length > 1){
      this.numeroValido = true;
    }else{
      this.numeroValido = false;
    }
    

    this.habilitaForm()

  }

  public atualizaComplemento(complemento : string):void{
    this.complemento = complemento;

    this.complementoEstadoPrimitivo = false;

    if(this.complemento.length > 1){
      this.complementoValido = true;
    }
    this.habilitaForm()

  }

  public atualizaFormaPagamento(pagamento : string):void{
    this.formaPagamento = pagamento

    this.formaPagamentoEstadoPrimitivo = false;

    if(this.formaPagamento != ''){
      this.formaPagamentoValido = true;
    }else{
      this.formaPagamentoValido = false;
    }
    this.habilitaForm()

  }

  public habilitaForm(): void{
    if (this.enderecoValido === true && this.enderecoValido === true &&
      this.formaPagamentoValido === true) {

      this.formEstado = '';
    } else { this.formEstado = 'disabled';}
  }

 public confirmarCompra(): void{

  this.ordemCompraService.efetivarCompra(this.pedido)

  }


}
