import { Model } from "sequelize";

export class CoinGeckoPlatformType extends Model {
  public id!: number;
  public platform!: string;
}
