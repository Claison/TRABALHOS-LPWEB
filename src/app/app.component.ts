import {Component} from '@angular/core';
import {Ocorrencia} from './ocorrencia.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  entrar=false;
  matricula= null;
  nome = null;
  observacao = null;
  nomePai=null;
  tipo="";
  data=null;
  pais=false;
  salvar_ok=false;
  ativa=false;
  ocorrencias = [ 
    new Ocorrencia(1,'Claison', 'indisciplina em sala de aula',),
      
    new Ocorrencia(2,'Heitor', 'comportamento inadequado com colegas',),
    
    new Ocorrencia(3,'Dyonnes', 'baixo indice de rendimento',),
      
    new Ocorrencia(4,'Patricia', 'indicação de atenção por assunto familíar, psicológico ou social',),
      
    new Ocorrencia(5,'Cesár', 'baixo indice de rendimento',),

    new Ocorrencia(6,'Jorge', 'comportamento inadequado com colegas',)
  ];
  aparece(){
    this.entrar=true;}
  esconde(){
    this.entrar=false;
  }
  
  
  salvar() {
    const d = new Ocorrencia(this.matricula, this.nome,this.tipo, this.data,this.pais,this.nomePai, this.observacao,);
    this.ocorrencias.push(d); 
    this.salvar_ok=true;
    this.matricula=null;
    this.nome = null;
    this.observacao = null;
    this.entrar=false;
    this.nomePai="";
    this.data=null;
    this.tipo=null;
    this.pais=false;
    this.salvar_ok=false;
  }
  
  
}