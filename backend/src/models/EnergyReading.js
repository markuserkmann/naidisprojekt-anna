import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

export const EnergyReading = sequelize.define(
  "EnergyReading",
  {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    },
    timestamp: {
      type: DataTypes.DATE,
      allowNull: false
    },
    location: {
      type: DataTypes.ENUM("EE", "LV", "FI"),
      allowNull: false
    },
    price_eur_mwh: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true
    },
    source: {
      type: DataTypes.ENUM("UPLOAD", "API"),
      allowNull: false
    }
  },
  {
    tableName: "EnergyReadings",
    underscored: true,
    timestamps: true,
    indexes: [
      {
        unique: true,
        fields: ["timestamp", "location"]
      }
    ]
  }
);
