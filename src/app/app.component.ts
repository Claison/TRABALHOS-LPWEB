import {Component} from '@angular/core';
import {Evento} from './evento.model';


/* Utilizando Angular, desenvolva um aplicativo web que permita ao usuário
cadastrar eventos favoritos. Especificamente, as funcionalidades e requisitos são:

Listar eventos cadastrados (mostrar: sigla, nome, data de início do evento,
data de término do evento, prazo para submissão de artigos)
Cadastrar evento (campos: sigla, nome, data de início do evento, 
data de término do evento, prazo para submissão de artigos, URL do site do evento)
Editar evento
Excluir evento */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Mostrar div
  cadastro=false;
  lista_evento= null;
  // Atributos de evento
  sigla = null;
  nome = null;
  dataI=null;
  dataF=null;
  prazo=null;
  url=null;

  editar = null;

  salvar_ok=false;
  ativa=false;

  
  eventos = [ 
    new Evento("EI",'Encoinfo',"2018-03-26","2018-04-25","2018-03-26","www.google.com.br"),
    new Evento("EI",'Encoinfo',"2018-03-26","2018-04-25","2018-03-26","www.google.com.br"),
    new Evento("EI",'Encoinfo',"2018-03-26","2018-04-25","2018-03-26","www.google.com.br"),
    new Evento("EI",'Encoinfo',"2018-03-26","2018-04-25","2018-03-26","www.google.com.br"),
    new Evento("EI",'Encoinfo',"2018-03-26","2018-04-25","2018-03-26","www.google.com.br") 
  
  ];
      
  
  exibir_cadastro(){
    this.salvar_ok=false;
    if(this.cadastro == true){
      this.cadastro = false;
    }
    else{
      this.cadastro = true;
    }
  }

  exibir_evento(){
    this.salvar_ok=false;
    if(this.lista_evento == true){
      this.lista_evento = false;
    }
    else{
      this.lista_evento = true;
    }  
  }
  salvar() {
    if (this.editar) {
      this.editar.sigla = this.sigla;
      this.editar.nome = this.nome;
      this.editar.dataI = this.dataI;
      this.editar.dataF = this.dataF;
      this.editar.prazo = this.prazo;
      this.editar.url = this.url;
      this.editar = null;
    }
    else {
    const d = new Evento(this.sigla, this.nome,this.dataI, this.dataF,this.prazo, this.url);
    this.eventos.push(d); 
    this.cancelar();   
    }
  }
  cancelar() {
    this.sigla=null;
    this.nome = null;
    this.dataI=false;
    this.dataF=false;
    this.prazo = null;
    this.url=null;
    }

    editor(evento) {
      this.sigla = evento.sigla;
      this.nome = evento.nome;
      this.dataI = evento.dataI;
      this.dataF = evento.dataF;
      this.prazo = evento.prazo;
      this.url = evento.url;
      this.editar = evento;
    }
    excluir(evento) {
      if (confirm('Tem certeza que deseja excluir a disciplina "'
          + evento.nome + '"?')) {
        const i = this.eventos.indexOf(evento);
        this.eventos.splice(i, 1);
      }
    }
    
}