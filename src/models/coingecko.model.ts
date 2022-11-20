import { Model } from "sequelize";

export class CoinGecko extends Model {
  public id!: number;
  public coinGeckoId!: string;
  public symbol!: string;
  public name!: string;
  public platforms!: string;
}
