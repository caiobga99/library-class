class Livro {
  id: string;
  conteudo: string;
  data_publicacao: string;
  constructor(id: string, conteudo: string, data_publicacao: string) {
    this.id = id;
    this.conteudo = conteudo;
    this.data_publicacao = data_publicacao;
  }
  /**
   * getId
   */
  public getId(): string {
    return this.id;
  }

  /**
   * setId
   */
  public setId(id: string) {
    this.id = id;
  }

  /**
   * getConteudo
   */
  public getConteudo(): string {
    return this.conteudo;
  }
  /**
   * setConteudo
   */
  public setConteudo(conteudo: string) {
    this.conteudo = conteudo;
  }
  /**
   * getData_Publicacao
   */
  public getData_Publicacao(): string {
    return this.data_publicacao;
  }
  /**
   * setData_Publicacao
   */
  public setData_Publicacao(data_publicacao: string) {
    this.data_publicacao = data_publicacao;
  }
}
