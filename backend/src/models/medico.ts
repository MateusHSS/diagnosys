import {DataTypes, Model} from "sequelize";
import sequelize from "@config/db";

interface MedicoAtributos {
  id?: number;
  crm: string;
  createdAt?: Date;
  updatedAt?: Date;
}

class Medico extends Model<MedicoAtributos> implements MedicoAtributos {
  public id!: number;
  public crm!: string;
  public readonly createdAt?: Date;
  public readonly updatedAt?: Date;
}

Medico.init(
  {
    id: {
      type: DataTypes.NUMBER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    crm: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize,
    modelName: "Medico",
    tableName: "medico",
    freezeTableName: true,
    timestamps: true,
  }
);

export default Medico;
