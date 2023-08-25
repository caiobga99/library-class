import { User } from "./User";

export interface DAO {
  create(data: any): any;
  read(): any;
  update(id: number, data: any): any;
  delete(id: number): any;
}
