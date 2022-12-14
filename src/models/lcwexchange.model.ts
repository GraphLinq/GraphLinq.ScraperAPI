import { Model } from "sequelize";

export class LcwExchange extends Model {
  public id!: number;
  public name!: string;
  public png64!: string;
  public png128!: string;
  public webp64!: string;
  public webp128!: string;
  public code!: string;
}
