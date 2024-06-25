import {DataTypes, Model, Sequelize} from "sequelize";
import sequelize from "@config/db";

export interface ConsultaAtributos {
  id?: number;
  idMedico: number;
  idPessoa: number;
  tipo: 'consulta'|'retorno';
  data: Date;
  descricao?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

class Consulta extends Model<ConsultaAtributos> implements ConsultaAtributos {
  public id!: number;
  public idMedico!: number;
  public idPessoa!: number;
  public tipo!: 'consulta'|'retorno';
  public data!: Date;
  public descricao?: string;
  public readonly createdAt?: Date;
  public readonly updatedAt?: Date;
}

Consulta.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    idMedico: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    idPessoa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      },
    tipo: {
      type: DataTypes.ENUM('consulta', 'retorno'),
      allowNull: false,
    },
    data: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: new Date(),
    },
    descricao: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "Consulta",
    tableName: "consulta",
    freezeTableName: true,
    timestamps: true,
  }
);

export default Consulta;