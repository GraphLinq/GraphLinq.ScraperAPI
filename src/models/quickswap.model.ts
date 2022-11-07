import { Model } from "sequelize";

export class Quickswap extends Model {
  public id!: number;
  public name!: string;
  public address!: string;
  public chainId!: number;
  public logoURI!: string;
  public decimals!: number;
  public symbol!: string;
}
