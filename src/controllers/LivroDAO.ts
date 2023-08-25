import { DAO } from "../models/DAO";
import { Database } from "../models/Database";

class LivroDao implements DAO {
  constructor(private readonly db: Database) {}

  /**
   * create
   */
  public create(data: any) {
    const sql: string = `INSERT INTO user(id, conteudo, data_publicacao) VALUES ('${data.id}, ${data.conteudo}', '${data.data_publicacao}'`;
    this.db.connect();
    const results: any = this.db.query(sql);
    return new Livro(data.id, data.titulo, data.categoria);
  }
  /**
   * read
   */
  public read() {
    const sql: string = "SELECT * FROM livros";
    this.db.connect();
    const results: any = this.db.query(sql);
  }

  /**
   * update
   */
  public update(id: number, data: any) {
    const sql: string = `UPDATE livro SET conteudo='${data.conteudo}', data_publicacao='${data.data_publicacao}' WHERE = ${id}`;
    this.db.connect();
    const results: any = this.db.query(sql);
  }

  /**
   * delete
   */
  public delete(id: number) {
    const sql: string = `DELETE FROM livros WHERE id = ${id}`;
    this.db.connect();
    const results: any = this.db.query(sql);
  }
}
