module.exports = (sequelize, DataTypes) => {
    const VehicleActivity = sequelize.define('vehicle-activity', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        vehicle_license:{
            type: DataTypes.STRING,
            allowNull: true
        },
        latitude:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        longitude: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        time: {
            type: DataTypes.DATE,
            allowNull: false
        },
    });
    return VehicleActivity;
    };
    