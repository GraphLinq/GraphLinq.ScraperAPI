import { Model } from "sequelize";

export class CoinMarketCap200 extends Model {
  public id!: number;
  public chainId!: string;
  public address!: string;
  public symbol!: string;
  public name!: string;
  public decimals!: number;
}
