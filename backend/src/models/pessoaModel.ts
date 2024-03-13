import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";
import sequelize from "@config/db";

export interface PessoaInput {
  nome: String;
  email: String;
  cpf: String;
  rg?: String;
  telefone?: String;
}

class Pessoa extends Model<
  InferAttributes<Pessoa>,
  InferCreationAttributes<Pessoa>
> {
  declare id: CreationOptional<Number>;
  declare nome: String;
  declare email: String;
  declare cpf: String;
  declare rg: CreationOptional<String>;
  declare telefone: CreationOptional<String>;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
}

Pessoa.init(
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
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    cpf: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      get() {
        const rawValue = this.getDataValue("cpf");

        return rawValue
          ? rawValue.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, "$1.$2.$3-$4")
          : null;
      },
      set(val: String) {
        this.setDataValue("cpf", val.replace(/\D/g, ""));
      },
    },
    rg: {
      type: DataTypes.STRING,
      allowNull: true,
      get() {
        const rawValue = this.getDataValue("rg");

        return rawValue
          ? rawValue.replace(/^(\d{2})(\d{3})(\d{3})$/, "$1-$2.$3")
          : null;
      },
      set(val: String) {
        this.setDataValue("rg", val.replace(/\D/g, ""));
      },
    },
    telefone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "pessoa",
  }
);

export default Pessoa;
