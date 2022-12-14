import { Model } from "sequelize";

export class LcwFiat extends Model {
  public id!: number;
  public code!: string;
  public countries!: string;
  public flag!: string;
  public name!: string;
  public symbol!: string;
}
