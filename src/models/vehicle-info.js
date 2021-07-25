module.exports = (sequelize, DataTypes) => {
const VehicleInfo = sequelize.define('vehicle-info', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    chasis_number:{
        type: DataTypes.STRING,
        allowNull: false
    },
    model:{
        type: DataTypes.STRING,
        allowNull: false
    },
    vehicle_license: {
        type: DataTypes.STRING,
        allowNull: false
    },
    engine_number: {
        type: DataTypes.STRING,
        allowNull: false
    },
});
return VehicleInfo;
};
