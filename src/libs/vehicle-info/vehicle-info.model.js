const Sequelize = require('sequelize');
const multer = require('multer'); 

const sequelize = require('../../configs/connection');
const VehicleInfo = require('../../models/vehicle-info')(sequelize, Sequelize);

VehicleInfo.sync();

exports.createVehicleInfo = (vehicleData) => {
    return new Promise((resolve, reject) => {
        VehicleInfo.create(vehicleData).then(vInfo => {
            resolve(vInfo);
        },err=>{
            reject({error:err});
        });
    });
};
exports.findVehicleInfoById = (id) => {
    return new Promise((resolve, reject) => {
        VehicleInfo.findByPk(id).then(vInfo  => {
            if(vInfo == null){
                reject({status:404,message:"Vehicle Information not found"});
            }
            resolve(vInfo);
        },err=>{
            reject({error:err});
        })
    });
};
exports.updateVehicleInfoById = (vehicleData, id) => {
    return new Promise((resolve, reject) => {
        VehicleInfo.update(vehicleData, {
            where: {
              id: id
            }
          }).then(VehicleInfo => {
            VehicleInfo.findByPk(id).then(VehicleInfo => {
                resolve(VehicleInfo);
            },err1=>{
                reject({error:err1});
            })
        },err=>{
            reject({error:err});
        });
    });
};
exports.deleteVehicleInfoById = (id) => {
    return new Promise((resolve, reject) => {
        VehicleInfo.destroy({
            where: {
              id: id
            }
          }).then(() => {
            resolve({message:"Delete Successfull!!!"});
        },err=>{
            reject({error:err});
        });
    });
}; 
exports.findAllVehicleInfo = () => {
    return new Promise((resolve, reject) => {
        VehicleInfo.findAll({
            attributes: ['id','chasis_number','model','vehicle_license','engine_number']
        }).then(VehicleInfo => {
            resolve(VehicleInfo);
        },err=>{
            reject({error:err});
        })
    });
}; 