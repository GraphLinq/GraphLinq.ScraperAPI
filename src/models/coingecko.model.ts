import { Model } from "sequelize";

export class CoinGecko extends Model {
  public id!: number;
  public factoryId!: number;
  public factoryName!: string;
  public factorySymbol!: string;
  public factoryLink!: string;
  public creatorAddress!: string;
  public royalty!: number;
  public price!: number;
  public currency!: string;
  public isPaused!: number;
  public curIndex!: number;
  public maxIndex!: number;
}
