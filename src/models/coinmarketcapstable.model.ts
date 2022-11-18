import { Model } from "sequelize";

export class CoinMarketCapStable extends Model {
  public id!: number;
  public chainId!: string;
  public address!: string;
  public symbol!: string;
  public name!: string;
  public decimals!: number;
}
