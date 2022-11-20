import { Model } from "sequelize";

export class CoinGeckoPlatform extends Model {
  public id!: number;
  public coingeckoId: string;
  public address!: string;
}
