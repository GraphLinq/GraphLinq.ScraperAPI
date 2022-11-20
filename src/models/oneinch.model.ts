import { Model } from "sequelize";

export class OneInch extends Model {
  public id!: number;
  public address!: string;
  public chainId!: number;
  public name!: string;
  public symbol!: string;
  public decimals!: number;
  public logoURI!: string;
}
