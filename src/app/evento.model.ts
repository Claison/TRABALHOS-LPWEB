export class Evento {
  sigla : string;
  nome : string;
  dataI: string;
  dataF:string;
  prazo: string;
  url: string;

  constructor(sigla:string, nome:string, dataI:string, dataF:string, prazo:string, url:string) {
  this.sigla = sigla;
  this.nome = nome;
  this.dataI = dataI;
  this.dataF = dataF;
  this.prazo = prazo;
  this.url = url;
  }
}