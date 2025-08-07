import { IDetailQuery, IDetailDTO, IListDTO } from "../api-interfaces/shared-queries.interfaces.js";

export abstract class BaseQueries {
  public abstract DetailQuery(qry: IDetailQuery): Promise<IDetailDTO>;
  public abstract ListQuery(): Promise<IListDTO>;
}