export class Ricetta {
  public nome: string;
  public descrizione: string;
  public imagePath: string;

  constructor(nome: string, desc: string, imagePath: string) {
    this.nome = nome;
    this.descrizione = desc;
    this.imagePath = imagePath;
  }
}
