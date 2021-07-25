const Sequelize = require('sequelize');
const multer = require('multer'); 
const Op = Sequelize.Op;

const sequelize = require('../../configs/connection');
const VehicleActivity = require('../../models/vehicle-activity')(sequelize, Sequelize);

VehicleActivity.sync();

exports.findAllPlaceInteractions = () => {
    return new Promise((resolve, reject) => {
        VehicleActivity.findAll({
            attributes: ['id','vehicle_license','latitude', 'longitude', 'time']
        }).then(VehicleActivity => {
            resolve(VehicleActivity);
        },err => {
            reject({error:err});
        })
    });
}; 

exports.findPlaceInteractionsByDate = (startDate, endDate) => {
    return new Promise((resolve, reject) => {
        VehicleActivity.findAll({
            attributes: ['id','vehicle_license','latitude', 'longitude', 'time'],
            where: {
                time: {
                    [Op.between]: [startDate, endDate],
                }
            },
        }).then(VehicleActivity => {
            resolve(VehicleActivity);
        }, err => {
            reject({ error:err });
        })
    });
}

exports.findAllVehicleActivity = (license, startDate, endDate) => {
    return new Promise((resolve, reject) => {
        VehicleActivity.findAll({
            attributes: ['id','vehicle_license','latitude', 'longitude', 'time'],
            where: {
                [Op.and]:[
                    { vehicle_license: license },
                    {
                        time: {
                            [Op.between]: [startDate, endDate]
                        }
                    }
                ]
            }
        }).then(VehicleActivity => {
            resolve(VehicleActivity);
        },err=>{
            reject({error:err});
        })
    });
}; 