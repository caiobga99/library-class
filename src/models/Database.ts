export class Database {
  static conn: any;
  constructor(
    private readonly host: string,
    private readonly database: string,
    private readonly username: string,
    private readonly password: string
  ) {}

  /**
   * connect
   */
  public connect() {
    const mysql = require("mysql2");
    Database.conn = mysql.createConnection({
      host: this.host,
      user: this.username,
      database: this.database,
    });
  }

  /**
   * query
   */
  public query(sql: string) {
    Database.conn.query(sql, function (err: any, results: any, fields: any) {
      if (err) {
        return `Error in acess sql ${err}`;
      }
      return results;
      //   console.log(fields);
    });
  }
}
