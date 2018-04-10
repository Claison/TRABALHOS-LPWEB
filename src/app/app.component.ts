import {Component} from '@angular/core';
import {Ocorrencia} from './ocorrencia.model';
import {Aluno} from './aluno.model';
import {Tipo} from './tipo.model';

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
  tipo=null;
  data=null;
  pais=false;
  salvar_ok=false;
  ativa=false;
  

  lista=false;
  cadastro=false;
  cont_ocorrencia=false;

  contadores = [0, 0, 0, 0];
  porcentagens = [0, 0, 0, 0];
  cont_abril = 0;
  cont_marco = 0;
  relacao_ocorrencias = 0;

  dataI=null;
  dataF=null;
  total_ocorrencia=null;

  ocorrencias = [ 
    /* new Ocorrencia(1,'Claison',new Tipo(3, 'indicação de atenção por assunto familiar, psicológico ou social'),"2018-04-25"),
    new Ocorrencia(2,'Heitor',new Tipo(2, 'baixo índice de rendimento'),"2018-03-26"),
    new Ocorrencia(3,'Dyonnes',new Tipo(1, 'comportamento inadequado com colegas'),"2018-03-02"),
    new Ocorrencia(4,'Patricia',new Tipo(1, 'comportamento inadequado com colegas'),"2018-04-09"),
    new Ocorrencia(5,'Cesár',new Tipo(0, 'indisciplina em sala de aula'),"2018-04-10"),
    new Ocorrencia(6,'Jorge',new Tipo(3, 'indicação de atenção por assunto familiar, psicológico ou social'),"2018-03-27") */
  ];
  tipos = [
    new Tipo(0, 'indisciplina em sala de aula'),
    new Tipo(1, 'comportamento inadequado com colegas'),
    new Tipo(2, 'baixo índice de rendimento'),
    new Tipo(3, 'indicação de atenção por assunto familiar, psicológico ou social')
  ];
  alunos=[
    new Aluno(1, 'Claison'),
    new Aluno(2, 'jorge'),
    new Aluno(3, 'César'),
    new Aluno(4, 'Patricia'),
    new Aluno(5, 'Laura'),
  ]
  exibir_lista(){
    this.salvar_ok=false;
    if(this.lista == true){
      this.lista = false;
    }
    else{
      this.lista = true;
    }
  }

  exibir_cadastro(){
    this.salvar_ok=false;
    if(this.cadastro == true){
      this.cadastro = false;
    }
    else{
      this.cadastro = true;
    }
  }

  exibir_ocorrencia(){
    this.salvar_ok=false;
    if(this.cont_ocorrencia == true){
      this.cont_ocorrencia = false;
    }
    else{
      this.cont_ocorrencia = true;
    }  
  }
  salvar() {
    const a = new Aluno(this.matricula, this.nome,);
    this.alunos.push(a);
    const t= this.tipos[this.tipo];
    const d = new Ocorrencia(this.matricula, this.nome,t, this.data,this.pais,this.nomePai, this.observacao,);
    this.ocorrencias.push(d); 
    this.salvar_ok=true;
    this.limpar();
    this.atualizarEstatisticas();
    this.cadastro=false;    
    }
  limpar() {
    
    this.matricula=null;
    this.nome = null;
    this.observacao = null;
    this.nomePai=null;
    this.data=null;
    this.tipo=null;
    this.pais=false;
    this.dataI=false;
    this.dataF=false;
    
    }
    atualizarEstatisticas() {
      this.contadores = [0, 0, 0, 0];
      this.cont_abril = 0;
      this.cont_marco = 0;
      for (var i = 0; i < this.ocorrencias.length; i++) {
        this.contadores[this.ocorrencias[i].tipo.id]++;
        if (this.ocorrencias[i].data.indexOf("-04-") != -1) {
          this.cont_abril++;
        }
        if (this.ocorrencias[i].data.indexOf("-03-") != -1) {
          this.cont_marco++;
        }
      }
      if (this.cont_marco != 0) {
        this.relacao_ocorrencias = (this.cont_abril - this.cont_marco)/this.cont_marco * 100;
      }
      for (var i = 0; i < 4; i++) {
        this.porcentagens[i] = this.contadores[i] / this.ocorrencias.length * 100;
      }
    }
    buscar(){
      this.total_ocorrencia=null;
      for (var i = 0; i < this.ocorrencias.length; i++) {
        if(Date.parse(this.ocorrencias[i].data) >= Date.parse(this.dataI) && Date.parse(this.ocorrencias[i].data) <= Date.parse(this.dataF)){
          this.total_ocorrencia++;
        }
      } 
    }
    buscaAluno() {
      for (const aluno of this.alunos) {
            if (aluno.matricula === this.matricula) {
                this.nome = aluno.nome;
                return;
            }
        }
        alert('Aluno não encontrado!');
        this.nome = null;
        this.matricula = null;
    }
  
}