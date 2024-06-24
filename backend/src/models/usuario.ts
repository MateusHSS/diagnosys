import {BelongsTo, DataTypes, Model} from "sequelize";
import bcrypt from "bcrypt";
import sequelize from "@config/db";
import Pessoa from "./pessoa";

const saltRounds = process.env.SALT_ROUNDS || 10;

export interface UsuarioAtributos {
  id?: number;
  login: string;
  senha: string;
  idPessoa: number;
  createdAt?: Date;
  updatedAt?: Date;
}

class Usuario extends Model<UsuarioAtributos> implements UsuarioAtributos {
  public id!: number;
  public login!: string;
  public senha!: string;
  public idPessoa!: number;
  public readonly createdAt?: Date;
  public readonly updatedAt?: Date;
}

Usuario.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    login: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    senha: {
      type: DataTypes.STRING,
      allowNull: false,
      // set(val: string) {
      //   bcrypt
      //     .hash(val, saltRounds)
      //     .then((hash) => this.setDataValue("senha", hash));
      // },
      // get() {
      //   return "";
      // },
    },
    idPessoa: {
      type: DataTypes.INTEGER,
      unique: true,
      references: {
        model: 'Pessoa',
        key: 'id'
      }
    },
  },
  {
    sequelize,
    modelName: "Usuario",
    tableName: "usuario",
    freezeTableName: true,
    timestamps: true,
  }
);

Usuario.belongsTo(Pessoa, {foreignKey: 'idPessoa'});
Pessoa.hasOne(Usuario, {foreignKey: 'idPessoa'});


export default Usuario;
