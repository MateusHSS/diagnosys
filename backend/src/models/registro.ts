import {DataTypes, Model} from "sequelize";
import sequelize from "@config/db";

export interface RegistroAtributos {
  id?: number;
  nome: string;
  idMedico: number;
  idPessoa: number;
  descricao?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

class Registro extends Model<RegistroAtributos> implements RegistroAtributos {
  public id!: number;
  public nome!: string;
  public idMedico!: number;
  public idPessoa!: number;
  public descricao?: string;
  public readonly createdAt?: Date;
  public readonly updatedAt?: Date;
}

Registro.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    idMedico: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    idPessoa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      },
    descricao: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "Registro",
    tableName: "registro",
    freezeTableName: true,
    timestamps: true,
  }
);

export default Registro;