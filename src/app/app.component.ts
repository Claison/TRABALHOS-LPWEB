import {Component} from '@angular/core';
import {Evento} from './evento.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Mostrar div
  cadastro=false;
  lista_evento= true;
  // Atributos de evento
  sigla = null;
  nome = null;
  dataI=null;
  dataF=null;
  prazo=null;
  url=null;

  editar = null;

  salvar_ok=false;

  eventos = [ 
    new Evento("EI",'Encoinfo',"2018-03-26","2018-04-25","2018-03-26","www.google.com.br"),
    new Evento("EI",'Encoinfo',"2018-03-26","2018-04-25","2018-03-26","www.google.com.br"),
    new Evento("EI",'Encoinfo',"2018-03-26","2018-04-25","2018-03-26","www.google.com.br"),
    new Evento("EI",'Encoinfo',"2018-03-26","2018-04-25","2018-03-26","www.google.com.br"),
    new Evento("EI",'Encoinfo',"2018-03-26","2018-04-25","2018-03-26","www.google.com.br") 
  
  ];
      
  exibir_cadastro(){
    this.lista_evento=false;
    
    if(this.cadastro == true){
      this.cadastro = false;
      this.lista_evento=true;
    }
    else{
      this.cadastro = true;
      
    }
  }

  exibir_evento(){
    this.cadastro = false; 
   if(this.lista_evento == true){
      this.lista_evento = false;
      this.cadastro = true;
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
    }
    this.cancelar();
  }
  cancelar() {
    this.exibir_evento();
    this.sigla=null;
    this.nome = null;
    this.dataI=null;
    this.dataF=null;
    this.prazo = null;
    this.url=null;
    this.editar = null;
    }
  
    editor(evento) {
      this.lista_evento=false;
      this.cadastro=true;
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